---
title: useNodesInitialized
sidebar_position: 9
---

This hook returns `true` when all nodes are initialized (measured by react flow and given a width and height). When you add a new node, it will return `false` and then `true` when the new node is initialized. It will always return `false` when the nodes array is empty.

:::caution

This hook can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/react-flow-provider/) or if it's a children of the `<ReactFlow />` component.

:::

### Usage

```js
import ReactFlow, { useNodesInitialized } from 'reactflow';

function KeyLogger() {
  const nodesInitialized = useNodesInitialized();

  useEffect(() => {
    if (nodesInitialized) {
      // do some layouting
    }
  }, [nodesInitialized]);

  return null;
}
```

### Typescript

`useNodesInitialized(): boolean`
