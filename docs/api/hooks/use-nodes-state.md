---
title: useNodesState
sidebar_position: 11
---

This helper hook creates a new local state to store React Flow nodes. It is very similar to React's `useState` but exposes a `onNodesChange` function that can be passed as a prop to the React Flow component. This makes it easier to quickly create controlled flows without the need to implement the `onNodesChange` function.

:::caution
This hook has been added for prototyping and reducing boilerplate in the React Flow examples. It should not be used in production.
:::

### Usage

```jsx
import ReactFlow, { addEdge, useNodesState, useEdgesState } from 'reactflow';

const initialNodes = [];
const initialEdges = [];

function ControlledFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    />
  );
}
```
