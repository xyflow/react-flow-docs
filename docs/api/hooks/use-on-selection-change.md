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
    onChange: ({ nodes, edges }) => console.log('changed selection', nodes, edges),
  });

  return null;
}
```

### Typescript

```js
useOnSelectionChange({
  onChange?: ({ nodes, edges }: { nodes: Node[], edges: Edge[] }):void => {console.log('changed selection', nodes, edges)},
}): void
```
