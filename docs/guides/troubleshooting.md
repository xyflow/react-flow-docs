---
title: Troubleshooting
sidebar_position: 9
---

This guide contains common questions and pitfalls that we collect from our [Discord Server](https://discord.gg/RVmnytFmGW), [Github Issues](https://github.com/wbkd/react-flow/issues) and [Github Discussions](https://github.com/wbkd/react-flow/discussions).

### Error: Seems like you have not used zustand provider as an ancestor

This usually happens when you are trying to access the internal React Flow state outside of the React Flow context. A possible solution is to wrap your component with a `ReactFlowProvider` or move the code that is accessing the state inside a child of your React Flow instance. See also: [`<ReactFlowProvider />`](/docs/api/react-flow-provider)

<table>
<tr>
<th>Good</th>
</tr>
<tr>
<td>

```jsx
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

function Flow(props) {
  const reactFlowInstance = useReactFlow();

  return <ReactFlow {...props} />;
}

function FlowWithProvider(props) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
```

</td>

</tr>
</table>

<table>
<tr>
<th>Bad</th>
</tr>
<tr>
<td>

```jsx
import ReactFlow from 'react-flow-renderer';

function FlowWithoutProvider(props) {
  const reactFlowInstance = useReactFlow();

  return <ReactFlow {...props} />;
}

export default FlowWithoutProvider;
```

</td>

</tr>
</table>

### React Flow: It looks like that you created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.

This warning appears when the `nodeTypes` or `edgeTypes` properties change after the initial render. The `nodeTypes` or `edgeTypes` should only be changed dynamically in very rare cases. Usually they are defined once with all the types that you are using in your application. It can happen easily that you are defining the nodeTypes or edgeTypes object inside of your component render function, which will cause React Flow to re-render every time your component re-renders.

<table>
<tr>
<th>Good</th>
</tr>
<tr>
<td>

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

</td>

</tr>
</table>

<table>
<tr>
<th>Bad</th>
</tr>
<tr>
<td>

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

</td>

</tr>
</table>
