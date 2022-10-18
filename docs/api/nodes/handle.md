---
title: Handle
sidebar_position: 4
---

import PropItems from '../../../src/components/Docs/PropItems'

We export a `Handle` component as a helper for your custom nodes:

```js
import { Handle } from 'reactflow';

const targetHandleWithValidation = (
  <Handle
    type="target"
    position="left"
    isValidConnection={(connection) => connection.source === 'some-id'}
    onConnect={(params) => console.log('handle onConnect', params)}
    style={{ background: '#fff' }}
  />
);
```

### Prop Types

import handleProps from '../../../docs-data/handle';

<PropItems props={handleProps} />

<div style={{ marginBottom: 20 }} />

### Typescript

The interface of the Handle Prop Types are exported as `HandleComponentProps`.

### Validation

The handle receives the additional class names `connecting` when the connection line is above the handle and `valid` if the connection is valid. You can find an example which uses these classes [here](/docs/examples/interaction/validation/).

### Multiple Handles

If you need multiple source or target handles you can achieve this by creating a custom node. Normally you just use the id of a node for the `source` or `target` of an edge. If you have multiple source or target handles you need to pass an id to these handles. These ids can be used by an edge with the `sourceHandle` and `targetHandle` options, so that you can connect a specific handle. If you have a node with an id = `1` and a handle with an id = `a` you can connect this handle by using the node `source=1` and the `sourceHandle=a`.

### Dynamic Handles

If you are programmatically changing the position or number of handles in your custom node, you need to update the node internals with the [`useUpdateNodeInternals`](/docs/api/hooks/use-update-node-internals/) hook.

You can find an example of how to implement a custom node with multiple handles in the [custom node guide](/docs/guides/custom-nodes) or in the [custom node example](/docs/examples/nodes/custom-node/).

### Custom Handle Styles

Since the handle is a div, you can use CSS to style it or pass a style prop to customize a Handle. You can see this in the [Add Node On Edge Drop](docs/examples/nodes/add-node-on-edge-drop/) and [Simple Floating Edges](docs/examples/edges/simple-floating-edges/) examples.
