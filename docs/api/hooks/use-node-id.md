---
title: useNodeId
sidebar_position: 13
---

This hook returns the node id of the custom node in which it is used.

:::caution

This hook can only be used within a [`custom node`](/docs/api/nodes/custom-nodes/).

:::

### Usage

```js
import { useNodeId } from 'reactflow';

function MyCustomNode() {
  const nodeId = useNodeId();

  return <div>this is the node with id {nodeId}</div>;
}
```
