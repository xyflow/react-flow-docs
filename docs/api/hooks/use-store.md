---
title: useStore
sidebar_position: 6
---

Under the hood React Flow uses [Zustand](https://github.com/pmndrs/zustand) for the internal state management.
If you need to access the internal state you can use the `useStore` hook inside a child component of the `ReactFlow` component or if your flow is wrapped with a [ReactFlowProvider](/docs/api/react-flow-provider/).

The hooks are exported directly from Zustand. You can check the [Zustand docs](https://github.com/pmndrs/zustand#readme) for more detailed information.

:::caution

As the internal state, the actions of React Flow might change in the future and should not be used if it is not really necessary.

:::

### `useStore`

```jsx
import { useEffect } from 'react';
import ReactFlow, { useStore } from '@react-flow/core';

const nodesLengthSelector = (state) => Array.from(state.nodeInternals.values()).length || 0;

const NodesLengthLogger = () => {
  const nodesLength = useStore(nodesLengthSelector);

  useEffect(() => {
    console.log('nodes length changed:', nodesLength);
  }, [nodesLength]);

  return null;
};

function Flow() {
  return (
    <ReactFlow nodes={nodes}>
      <NodesLengthLogger />
    </ReactFlow>
  );
}
```

### `useStoreApi`

```jsx
import { useCallback } from 'react';
import ReactFlow, { useStoreApi } from '@react-flow/core';

const NodesLengthLogger = () => {
  const store = useStoreApi();

  const onClick = useCallback(() => {
    const nodesLength = Array.from(state.nodeInternals.values()).length || 0;
    console.log('nodes length changed:', nodesLength);
  }, []);

  return <button onClick={onClick}>print node length</button>;
};

function Flow() {
  return (
    <ReactFlow nodes={nodes}>
      <NodesLengthLogger />
    </ReactFlow>
  );
}
```

### Internal actions

The actions are also stored in the global state. You will not need this in most cases but you can use the internal actions that are defined in the [store](https://github.com/wbkd/react-flow/blob/main/src/store/index.ts):

```js
import { useEffect } from 'react';
import { useStore } from '@react-flow/core'

const setMinZoomSelector = (state) => state.setMinZoom;

function MinZoomSetter() {
  const setMinZoom = useStore(setMinZoomSelector);

  useEffect(() => {
    setMinZoom(6);
  }, []);

  return null;
});
```
