---
title: useReactFlow
sidebar_position: 1
---

The `useReactFlow` hook returns the [React Flow instance](/docs/api/react-flow-instance) to manipulate nodes, edges and the viewport and get informations about the current state. You can find the whole list of functions on [React Flow instance](/docs/api/react-flow-instance) page.

:::caution

Hooks can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/components/provider/).

:::

### Usage

```javascript
import ReactFlow, { useReactFlow } from 'react-flow-renderer';

function Flow() {
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    console.log(reactFlowInstance);
  }, []);

  return <ReactFlow defaultNodes={[]} />;
}
```

You can find an example of how to use it here: [useZoomPanHelper example](/examples/use-zoom-pan-helper-hook/)
