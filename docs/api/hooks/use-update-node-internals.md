---
title: useUpdateNodeInternals
sidebar_position: 7
---

When you are **programatically changing the number or the position of handles inside a custom node** you need to notify React Flow about it with the `useUpdateNodeInternals` hook. It also updates the internal dimensions of a node. The hook returns a function that expects a `string` (node id) as a parameter.

:::caution

This hook can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/react-flow-provider/) or if it's a children of the `<ReactFlow />` component.

:::

### Usage

```javascript
import { useUpdateNodeInternals } from '@react-flow/core';

function UpdateNodeButton() {
  const updateNodeInternals = useUpdateNodeInternals();

  return <button onClick={() => updateNodeInternals('node-id')}></button>;
}
```

### Typescript

The returned function has the type `UpdateNodeInternal`. Which is `(nodeId: string) => void;`:

`useUpdateNodeInternals(): UpdateNodeInternals`
