---
title: useEdges
sidebar_position: 3
---

This hook returns the edges. The component that uses this hook re-renders whenever an edge changes.

:::caution

Hooks can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/components/provider/).

:::

### Usage

```javascript
import ReactFlow, { useEdges } from 'react-flow-renderer';

function EdgeLogger() {
  const edges = useEdges();

  useEffect(() => {
    console.log(edges);
  }, [edges]);

  return null;
}
```
