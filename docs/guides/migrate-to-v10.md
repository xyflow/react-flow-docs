---
title: Migrate to v10
sidebar_position: 8
---

Welcome to React Flow v10! With our latest major version update there are coming lots of new features but also some breaking changes.

## New Features

- [**Sub Flows**](/docs/guides/sub-flows): You can now add nodes to a parent node and create groups and nested flows
- **Node Type 'group'**: A new node type without handles that can be used for a group node
- **Touch Device Support**: It is now possible to connect nodes on touch devices
- **Fit View on Init**: You can use the new prop `fitView` to fit the initial view
- **Key Handling**: You can now not only pass single keys but also multiple keys and key combinations
- [**useKeyPress hook**](/docs/api/hooks/use-key-press): A util hook for handling keyboard events
- [**useReactFlow hook**](/docs/api/hooks/use-react-flow): Returns a React Flow instance that exposes functions to manipulate the graph
- **[useNodes](/docs/api/hooks/use-nodes), [useEdges](/docs/api/hooks/use-edges) and [useViewport](/docs/api/hooks/use-viewport) hooks**: Hooks for receiving nodes, edges and the viewport.

## Breaking Changes

TLDR:

- Split the `elements` array into `nodes` and `edges` arrays and implement `onNodesChange` and `onEdgesChange` handlers (detailed guide in the [core concepts section](/docs/api/guides/core-concepts)).

* rename `onLoad` to `onInit`
* rename `paneMoveable` to `panOnDrag`
* rename `useZoomPanHelper` to `useReactFlow` (and `setTransform` to `setViewport`)
* rename node and edge option `isHidden` to `hidden`

Detailed explanation of breaking changes:

### 1. ~~Elements~~ - Nodes and Edges

We saw that a lot of people struggle with the semi controlled `elements`. It was always a bit messy to sync the local user state with the internal state of React Flow. Some of you used the internal store that was never documented and always a kind of hacky solution. For the new version we offer two ways to use React Flow - uncontrolled and controlled.

### 1.1. Controlled `nodes` and `edges`

If you want to have the full control and use the nodes and edges from local state, you can use the `nodes`, `edges` props in combination with `onNodesChange` and `onEdgesChange`. You need to implement these handlers for an interactive flow (if you are fine with just pan and zoom you don't need them). You'll receive a change when a node(s) gets initialized, dragged, selected or removed. This means that you always know the exact position and dimensions of a node or if it's selected for example. We export the helper functions `applyNodeChanges` and `applyEdgeChanges` that you can/should use to apply the changes.

#### Old API

```jsx
import ReactFlow, { removeElements } from 'react-flow-renderer';

const initialElements = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 150, y: 100 } },
  { id: 'e1-2', source: '1', target: '2' },
];

const BasicFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = useCallback(
    (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els)),
    []
  );

  return <ReactFlow elements={elements} onElementsRemove={onElementsRemove} />;
};

export default BasicFlow;
```

#### New API

```jsx
import ReactFlow, { applyNodeChanges, applyEdgeChanges } from 'react-flow-renderer';

const initialNodes = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 150, y: 100 } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const BasicFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((ns) => applyNodeChanges(changes, ns)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((es) => applyEdgeChanges(changes, es)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
    />
  );
};

export default BasicFlow;
```

You can also use the new hooks `useNodesState` and `useEdgesState` for a quick start:

```js
const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
```

related changes:

- `onElementsClick` ->`onNodeClick` and `onEdgeClick`
- `onElementsRemove` -> replaced by the `onNodesChange` and `onEdgesChange` handler

### 1.2 Uncontrolled `defaultNodes` and `defaultEdges`

The easiest way to get started is to use the `defaultNodes and `defaultEdges` props. When you set these props, all actions are handled internally. You don't need to add any other handlers to get a fully interactive flow with dragging nodes, removing nodes and edges and connecting nodes:

#### New API

```jsx
import ReactFlow from 'react-flow-renderer';

const defaultNodes = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 150, y: 100 } },
];

const defaultEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const BasicFlow = () => {
  return <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} />;
};

export default BasicFlow;
```

If you want to add, remove or update a node or edge you can only do this by using the ReactFlow instance that you can receive either with the new `useReactFlow` hook or by using the `onPaneReady` handler that gets the instance as a function param.

### 4. ~~Redux~~  - Zustand

We switched our state management library from Redux to Zustand. With this change we removed ~300LOC from our state related code :) The internal store and actions were not documented, but a lot of you used them. If you still need access, you can use the `useStore` hook:

#### Old API

```jsx
import { useStoreState, useStoreActions } from 'react-flow-renderer';

...

const transform = useStoreState((store) => store.transform);
const setSelectedElements = useStoreActions((actions) => actions.setSelectedElements);
```

#### New API

```jsx
import { useStore } from 'react-flow-renderer';

...
const transform = useStore((store) => store.transform);
const setSelectedElements = useStore((store) => store.setSelectedElements);
```

You still need to wrap your component with a `ReactFlowProvider` if you want to access the internal store.

We are also exporting `useStoreApi` if you need to get the store in an eventhandler for example without triggering re-renders.

```js
import { useStoreApi } from 'react-flow-renderer';

...

const store = useStoreApi();

...
// in an event handler
const [x, y, zoom] = store.getState().transform;
```

### 5. ~~onLoad~~ - onInit

The `onLoad` callback has been renamed to `onInit` and now fires when the nodes are initialized.

#### Old API

```js
const onLoad = (reactFlowInstance: OnLoadParams) => reactFlowInstance.zoomTo(2);
...
<ReactFlow
   ...
  onLoad={onLoad}
/>
```

#### New API

```js
const onInit = (reactFlowInstance: ReactFlowInstance) => reactFlowInstance.zoomTo(2);
...
<ReactFlow
   ...
  onInit={onInit}
/>
```

### 6. ~~paneMoveable~~ - panOnDrag

This is more consistent with the rest of the API (`panOnScroll`, `zoomOnScroll`, etc.)

### 7. ~~useZoomPanHelper transform~~ - unified in `useReactFlow`

Since "transform" is also the variable name of the transform in the store and it's not clear that `transform` is a setter we renamed it to `setViewport`. This is also more consistent with the other functions. Also, all `useZoomPanHelper` functions have been moved to the React Flow instance that you get from the `useReactFlow` hook or the `onPaneReady` handler.

#### Old API

```js
const { transform } = useZoomPanHelper();
...
transform({ x: 100, y: 100, zoom: 2 });
```

#### New API

```js
const { setViewport } = useReactFlow();
...
setViewport({ x: 100, y: 100, zoom: 2 });
```

New viewport functions:

- `getZoom`
- `getViewport`

### 8. ~~isHidden~~ - hidden

We mixed prefixed (`is...`) and non-prefixed boolean options. All node and edge options are not prefixed anymore. So it's `hidden`, `animated` and `selected`, `draggable`, `selectable` and `connectable`.

#### Old API

```js
const hiddenNode = { id: '1', isHidden: true, position: { x: 50, y: 50 } };
```

#### New API

```js
const hiddenNode = { id: '1', hidden: true, position: { x: 50, y: 50 } };
```

### 9. ~~arrowHeadType~~ ~~markerEndId~~ - markerStart / markerEnd

We improved the API for customizing the markers for an edge. With the new api you are able to set individual markers at the start and the end of an edge as well as customizing them with colors, strokeWidth etc. You still have the ability to set a markerEndId but instead of using different properties, the `markerStart` and `markerEnd` property accepts either a string (id for the svg marker that you need to define yourself) or a configuration object for using the built in arrowclosed or arrow markers.

#### Old API

```js
const markerEdge = { source: '1', target: '2', arrowHeadType: 'arrow' };
```

#### New API

```js
const markerEdge = {
  source: '1',
  target: '2',
  markerStart: 'myCustomSvgMarker',
  markerEnd: { type: 'arrow', color: '#f00' },
};
```

### 10. ~~ArrowHeadType~~ - MarkerType

This is just a wording change for making the marker api more consistent. As we are now able to set markers for the start of the edge, the name type ArrowHeadType has been renamed to MarkerType. In the future, this can also not only contain arrow shapes but others like circles, diamonds etc.

## nodeTypes and edgeTypes

We are not memoizing `nodeTypes` and `edgeTypes` anymore. In v9 we introduced a way to update the node/edge types via `nodeTypesId`/`edgeTypesId`. This seems unnecessary and we want the these props to behave like the other props too. This means that it is important that you are memoizing your node and edge types or simply define them outside of your component:

```js
const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);
```

### 11. Attribution

This is not really a breaking change to the API but a little change in the general appearance of React Flow. We added a tiny "React Flow" attribution to the bottom left (the position is configurable). We want to focus on the development of React Flow and for this we will add the possibility to create a paid account in order to remove the attribution. When everything is ready we will publish a blog post with further details.
