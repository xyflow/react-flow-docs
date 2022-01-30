---
title: useUpdateNodeInternals
sidebar_position: 4
---

When you are **programatically changing the number or the position of handles inside a custom node** you need to notify React Flow about it with the `useUpdateNodeInternals` hook. It also updates the internal dimensions of a node.

:::caution

Hooks can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/react-flow-provider/).

:::

### Usage

```javascript
import { useUpdateNodeInternals } from 'react-flow-renderer';

function UpdateNodeButton() {
  const updateNodeInternals = useUpdateNodeInternals();

  return <button onClick={() => updateNodeInternals('node-id')}></button>;
}
```
