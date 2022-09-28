---
title: ReactFlowProvider
sidebar_position: 3
---

You need to wrap your flow with a `ReactFlowProvider` if you:

- want to use one of these **React Flow hooks** `useReactFlow`, `useNodes`, `useEdges`, `useViewport` or `useUpdateNodeInternals` in components that are no children of the `ReactFlow` component
- have **multiple flows** on a page
- need to **access the internal state and actions** in components that are no children of the `ReactFlow` component

```jsx
import ReactFlow, { ReactFlowProvider } from 'reactflow';

const nodes = [{ id: 'node-1', position: { x: 0, y: 0 }, data: { label: 'node 1' } }];

function Flow() {
  const reactFlowInstance = useReactFlow();

  return <ReactFlow defaultNodes={nodes} />;
}

function FlowWithProvider() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
```

This component gets used in the [ReactFlowProvider example](/docs/examples/misc/provider/).
