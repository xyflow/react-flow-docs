---
title: Troubleshooting
sidebar_position: 9
---

This guide contains warnings and errors that can occur when using React Flow. We are also adding common questions and pitfalls that we collect from our [Discord Server](https://discord.gg/RVmnytFmGW), [Github Issues](https://github.com/wbkd/react-flow/issues) and [Github Discussions](https://github.com/wbkd/react-flow/discussions).

### Warning: Seems like you have not used zustand provider as an ancestor

This usually happens when you are trying to access the internal React Flow state outside of the React Flow context. A possible solution is to wrap your component with a `ReactFlowProvider` or move the code that is accessing the state inside a child of your React Flow instance. See also: [`<ReactFlowProvider />`](/docs/api/react-flow-provider)

**This will cause an error:**

```jsx
import ReactFlow from 'react-flow-renderer';

function FlowWithoutProvider(props) {
  // cannot access the state here
  const reactFlowInstance = useReactFlow();

  return <ReactFlow {...props} />;
}

export default FlowWithoutProvider;
```

**This will cause an error, too:**

```jsx
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

function Flow(props) {
  // still cannot access the state here
  // only child components of this component can access the state
  const reactFlowInstance = useReactFlow();

  return (
    <ReactFlowProvider>
      <ReactFlow {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
```

** This works:**

As soon as you want to access the internal state of React Flow (for example by using the `useReactFlow` hook, you need to wrap your component with a `ReactFlowProvider`). Here the wrapping is done outside of the component.

```jsx
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

function Flow(props) {
  // you can access the internal state here
  const reactFlowInstance = useReactFlow();

  return <ReactFlow {...props} />;
}

// wrapping with ReactFlowProvider is done outside of the component
function FlowWithProvider(props) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
```

### It looks like you have created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.

This warning appears when the `nodeTypes` or `edgeTypes` properties change after the initial render. The `nodeTypes` or `edgeTypes` should only be changed dynamically in very rare cases. Usually they are defined once with all the types that you are using in your application. It can happen easily that you are defining the nodeTypes or edgeTypes object inside of your component render function, which will cause React Flow to re-render every time your component re-renders.

** Will cause the warning:**

```jsx
import ReactFlow from 'react-flow-renderer';
import MyCustomNode from './MyCustomNode';

function Flow(props) {
  // new object being created on every render
  // causing unneccessary re-renders
  const nodeTypes = {
    myCustomNode: MyCustomNode,
  };

  return <ReactFlow nodeTypes={nodeTypes} />;
}

export default Flow;
```

** Recommended implementation:**

```jsx
import ReactFlow from 'react-flow-renderer';
import MyCustomNode from './MyCustomNode';

// defined outside of the component
const nodeTypes = {
  myCustomNode: MyCustomNode,
};

function Flow(props) {
  return <ReactFlow nodeTypes={nodeTypes} />;
}

export default Flow;
```

** Alternative:**
You can use this if you want to change your nodeTypes dynamically without causing unneccessary re-renders.

```jsx
import { useMemo } from 'react';
import ReactFlow from 'react-flow-renderer';
import MyCustomNode from './MyCustomNode';

function Flow(props) {
  const nodeTypes = useMemo(
    () => ({
      myCustomNode: MyCustomNode,
    }),
    []
  );

  return <ReactFlow nodeTypes={nodeTypes} />;
}

export default Flow;
```

### Node type not found. Using fallback type "default".

This usually happens when you are specifying a custom node type for one of your nodes but not passing the correct nodeTypes property to React Flow. The string for the type option of your custom node needs to be exactly the same as the key of the nodeTypes object.

**Doesn't work:**

```jsx
import ReactFlow from 'react-flow-renderer';
import MyCustomNode from './MyCustomNode';

const nodes = [
  {
    id: 'mycustomnode',
    type: 'custom',
    // ...
  },
];

function Flow(props) {
  // nodeTypes property is missing, so React Flow cannot find the custom node component to render
  return <ReactFlow nodes={nodes} />;
}
```

**Doesn't work as well:**

```jsx
import ReactFlow from 'react-flow-renderer';
import MyCustomNode from './MyCustomNode';

const nodes = [
  {
    id: 'mycustomnode',
    type: 'custom',
    // ...
  },
];

const nodeTypes = {
  Custom: MyCustomNode,
};

function Flow(props) {
  // node.type and key in nodeTypes object are not exactly the same (capitalized)
  return <ReactFlow nodes={nodes} nodeTypes={nodeTypes} />;
}
```

**This does work:**

```jsx
import ReactFlow from 'react-flow-renderer';
import MyCustomNode from './MyCustomNode';

const nodes = [
  {
    id: 'mycustomnode',
    type: 'custom',
    // ...
  },
];

const nodeTypes = {
  custom: MyCustomNode,
};

function Flow(props) {
  return <ReactFlow nodes={nodes} nodeTypes={nodeTypes} />;
}
```

### The React Flow parent container needs a width and a height to render the graph.

Under the hood, React Flow measures the parent DOM element using JavaScript to fit the renderer inside. Often times, if you try to render React Flow in a regular div, there is no height specified and so we cannot display the graph. If you encounter this warning, you need to make sure that your wrapper component has some CSS attached to it so that it gets a fixed height or inherits the height of its parent.

** This will cause the warning:**

```jsx
import ReactFlow from 'react-flow-renderer';

function Flow(props) {
  return (
    <div>
      <ReactFlow {...props} />
    </div>
  );
}
```

** Working example:**

```jsx
import ReactFlow from 'react-flow-renderer';

function Flow(props) {
  return (
    <div style={{ height: 800 }}>
      <ReactFlow {...props} />
    </div>
  );
}
```

### Only child nodes can use a parent extent.

This warning appears when you are trying to add the `extent` option to a node that does not have a parent node. Depending on what you are trying to do, you can remove the `extent` option or specify a `parentNode`.

**Does show a warning:**

```jsx
import ReactFlow from 'react-flow-renderer';

const nodes = [
  {
    id: 'mycustomnode',
    extent: 'parent',
    // ...
  },
];

function Flow(props) {
  return <ReactFlow nodes={nodes} />;
}
```

**Warning resolved:**

```jsx
import ReactFlow from 'react-flow-renderer';

const nodes = [
  {
    id: 'mycustomnode',
    parentNode: 'someothernode',
    extent: 'parent',
    // ...
  },
];

function Flow(props) {
  return <ReactFlow nodes={nodes} />;
}
```

### Can't create edge. An edge needs a source and a target.

This happens when you do not pass a `source` and a `target` option to the edge object. Without the source and target, the edge cannot be rendered.

** Will show a warning:**

```jsx
import ReactFlow from 'react-flow-renderer';

const nodes = [
  /* ... */
];

const edges = [
  {
    nosource: '1',
    notarget: '2',
  },
];

function Flow(props) {
  return <ReactFlow nodes={nodes} edges={edges} />;
}
```

** Doesn't show a warning:**

```jsx
import ReactFlow from 'react-flow-renderer';

const nodes = [
  /* ... */
];

const edges = [
  {
    source: '1',
    target: '2',
  },
];

function Flow(props) {
  return <ReactFlow nodes={nodes} edges={edges} />;
}
```

### The old edge with id="some-id" does not exist.

This can happen when you are trying to [update an edge](/docs/examples/edges/updatable-edge) but the edge you want to update is already removed from the state. This is a very rare case. Please see the [Updatable Edge example](/docs/examples/edges/updatable-edge) for implementation details.

### Couldn't create edge for source/target handle id: "some-id"; edge id: "some-id".

This can happen if you are working with multiple handles and a handle is not found by it's `id` property. Please see the [Custom Node Example](/docs/examples/nodes/custom-node) for an example of working with multiple handles.

### Marker type doesn't exist.

This warning occurs when you are trying to specify a marker type that is not built into React Flow. The existing marker types are documented [here](/docs/api/edges/edge-options/#markerstart--markerend-options).
