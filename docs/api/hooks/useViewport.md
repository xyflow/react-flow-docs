---
title: useViewport
sidebar_position: 4
---

This hook returns the ndes. The component that uses this hook re-renders whenever a node changes.

:::caution

Hooks can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/react-flow-provider/).

:::

### Usage

```javascript
import ReactFlow, { useViewport } from 'react-flow-renderer';

function ViewportLogger() {
  const { x, y, zoom } = useViewport();

  useEffect(() => {
    console.log(x, y, zoom);
  }, [x, y, zoom]);

  return null;
}
```
