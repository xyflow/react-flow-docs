---
title: useViewport
sidebar_position: 4
---

This hook returns the viewport (`{ x: number, y: number, zoom: number }`). The component that uses this hook re-renders whenever the viewport changes.

:::caution

Hooks can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/react-flow-provider/).

:::

### Usage

```javascript
import ReactFlow, { useViewport } from '@react-flow/core';

function ViewportLogger() {
  const { x, y, zoom } = useViewport();

  useEffect(() => {
    console.log(x, y, zoom);
  }, [x, y, zoom]);

  return null;
}
```

### Typescript

`useViewport(): Viewport`
