---
title: useOnSelectionChange
sidebar_position: 6
---

This hook lets you listen to selection changes.

:::caution

This hook can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/react-flow-provider/) or if it's a child of the `<ReactFlow />` component.

:::

### Usage

```js
import { ReactFlow, useOnSelectionChange } from 'reactflow';

function SelectionChangeLogger() {
  useOnSelectionChange({
    onChange: ({ node, edges }) => console.log('changed selection', nodes, edges),
  });

  return null;
}
```

### Typescript

```js
useViewport({
  onChange?: ({ nodes, edges }: { nodes: Node, edges: Edge }) => void,
}): void
```
