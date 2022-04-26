---
title: <ReactFlowProvider />
sidebar_position: 3
---

You need to wrap your flow with a `ReactFlowProvider`:

- if you want to use one of these **React Flow hooks** `useReactFlow`, `useNodes`, `useEdges`, `useViewport` or `useUpdateNodeInternals`
- if you have **multiple flows** on a page
- if you need **access to the internal state and actions**

```jsx
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

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

It is used in the [provider example](/docs/examples/misc/provider/).
