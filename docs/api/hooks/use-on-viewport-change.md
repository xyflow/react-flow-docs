---
title: useOnViewportChange
sidebar_position: 5
---

This hook lets you listen to viewport changes. You can pass an object with an `onStart`, `onChange` and `onEnd` handlers.

:::caution

This hook can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/react-flow-provider/) or if it's a children of the `<ReactFlow />` component.

:::

### Usage

```js
import { useCallback } from 'react';
import { ReactFlow, useOnViewportChange } from '@react-flow/core';

function ViewportChangeLogger() {
  useOnViewportChange({
    onStart: useCallback((viewport: Viewport) => console.log('start', viewport), []),
    onChange: useCallback((viewport: Viewport) => console.log('change', viewport), []),
    onEnd: useCallback((viewport: Viewport) => console.log('end', viewport), []),
  });

  return null;
}
```

### Typescript

```js
useViewport({
  onStart?: (viewport: Viewport) => void,
  onChange?: (viewport: Viewport) => void,
  onEnd?: (viewport: Viewport) => void
}): void
```
