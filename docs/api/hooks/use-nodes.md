---
title: useNodes
sidebar_position: 2
---

This hook returns the ndes. The component that uses this hook re-renders whenever a node changes.

:::caution

Hooks can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/components/provider/).

:::

### Usage

```javascript
import ReactFlow, { useNodes } from 'react-flow-renderer';

function NodesLogger() {
  const nodes = useNodes();

  useEffect(() => {
    console.log(nodes);
  }, [nodes]);

  return null;
}
```
