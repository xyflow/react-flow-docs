---
title: Provider
---

If you have **multiple flows** on a page or if you need **access to the internal state and actions** of React Flow outside of the `ReactFlow` component you need to wrap it with the `ReactFlowProvider` component:

```jsx
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

const FlowWithProvider = () => (
  <ReactFlowProvider>
    <ReactFlow
      elements={elements}
      onElementClick={onElementClick}
      onConnect={onConnect}
    />
  </ReactFlowProvider>
);
```

It is used in the [provider example](/examples/provider/).
