---
title: useEdges
sidebar_position: 3
---

This hook returns the edges. The component that uses this hook re-renders whenever an edge changes.

:::caution

This hook can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/react-flow-provider/) or if it's a children of the `<ReactFlow />` component.

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

### Typescript

`useEdges(): Edge[]`
