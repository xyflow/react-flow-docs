---
title: useKeyPress
sidebar_position: 7
---

This hook returns if the passed key is pressed. The component that uses this hook re-renders whenever a the returned boolean changes. The hook expects one paramter "keyCode" which can be:

- a `string` like `"Space"` (event.code or event.key) for a **single key**
- a `string` like `"Meta+s"` (event.code or event.key combined with a + sign) for a **key combination**
- an array with a single or key combination for **multiple possibilities** like: `['Backspace', 'Meta+d']`

:::info

This hook doesn't use the internal React Flow state. You can use it everywhere in your app.

:::

### Usage

```javascript
import ReactFlow, { useKeyPress } from '@react-flow/core';

function KeyLogger() {
  const spacePressed = useKeyPress('Space');
  const cmdAndSPressed = useKeyPress(['Meta+s', 'Strg+s']);

  useEffect(() => {
    console.log('space pressed', spacePressed);
  }, [spacePressed]);

  useEffect(() => {
    console.log('cmd and s pressed', cmdAndSPressed);
  }, [cmdAndSPressed]);

  return null;
}
```

### Typescript

`useKeyPress(keyCode: string | string[]): boolean`
