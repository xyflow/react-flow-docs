---
title: useStore
sidebar_position: 5
---

Under the hood React Flow uses [Redux](https://redux.js.org/) for state handling.
If you need to access the internal state you can use the `useStoreState` hook inside a child component of the `ReactFlow` component:

### Internal state

```jsx
import ReactFlow, { useStoreState } from 'react-flow-renderer';

const NodesDebugger = () => {
  const nodes = useStoreState((state) => state.nodes);

  console.log(nodes);

  return null;
};

const Flow = () => (
  <ReactFlow elements={elements}>
    <NodesDebugger />
  </ReactFlow>
);
```

### Internal actions

<InfoBox title="Attention" text="The internal actions of React Flow might change in the future and should not be used if it is not necessary."/>

You will not need this in most cases but you can also use the internal actions that are defined in the [store](https://github.com/wbkd/react-flow/blob/main/src/store/index.ts):

```jsx
import React, { useEffect } from 'react';
import { useStoreActions } from 'react-flow-renderer'

const MinZoom = () => {
  const setMinZoom = useStoreActions(actions => actions.setMinZoom);

  useEffect(() => {
    setMinZoom(6);
  }, []);

  return null;
});
```

If you need more control you can wrap the `ReactFlow` component with the `ReactFlowProvider` component in order to be able to call `useStoreState` and `useStoreActions` outside of the `ReactFlow` component.
