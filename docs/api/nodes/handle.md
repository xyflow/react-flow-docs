---
title: Handle
sidebar_position: 4
---

We export a `Handle` component as a helper for your custom nodes:

```javascript
import { Handle } from 'react-flow-renderer';

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

- `type`: 'source' or 'target'
- `id`: string - you only need this when you have multiple source or target handles (otherwise the node id is used)
- `position`: 'left', 'right', 'top' or 'bottom' handle position - default: 'top' for type target, 'bottom' for type source
- `onConnect`: function that gets triggered on connect. This callback only gets executed on source handles.
- `isValidConnection`: function receives a connection `{ target: 'some-id', source: 'another-id', sourceHandle: 'source handle id or null', targetHandle: 'target handle id or null' }` as param, returns a boolean - default: `true`.
- `isConnectable` boolean (this prop gets passed to your custom node component)
- `style`: css properties
- `className`: additional class name

**Typescript:** The interface of the Handle Prop Types are exported as `HandleProps`.

### Validation

The handle receives the additional class names `connecting` when the connection line is above the handle and `valid` if the connection is valid. You can find an example which uses these classes [here](/examples/validation/).

### Multiple Handles

If you need multiple source or target handles you can achieve this by creating a custom node. Normally you just use the id of a node for the `source` or `target` of an edge. If you have multiple source or target handles you need to pass an id to these handles. These ids can be used by an edge with the `sourceHandle` and `targetHandle` options, so that you can connect a specific handle. If you have a node with an id = `1` and a handle with an id = `a` you can connect this handle by using the node `source=1` and the `sourceHandle=a`.

You can find an example of how to implement a custom node with multiple handles in the [custom node example](/examples/custom-node/).

**Migrating Multiple Handles from v6 to v7+**

The way multiple handles are treated has changed in v7.0.0.

```javascript
// lets say we have 2 nodes, one input node with a source handle and a custom node with two target handles which have the ids a and b
// our goal is to have a connection from the input node to each of the target handles of the custom node
const nodes = [
  { id: '1', type: 'input', data: { label: 'Node with one source handle' } },
  {
    id: '2',
    type: 'multiHandleNode',
    data: { label: 'This node contains 2 handles with ids a and b' },
  },
];

// in v6 and below we only had the target property to tell react-flow which handle is connected
// this has been done using __ in the target id
const elementsV6 = [
  ...nodes,
  {
    id: 'e1-2a',
    source: '1',
    target: '2__a', // targetNode 2, targetHandle a
  },
  {
    id: 'e1-2a',
    source: '1',
    target: '2__b', // targetNode 2, targetHandle b
  },
];

// from v7 onwards we can use the targetHandle/sourceHandle properties to define which handle the edge is connecting exactly
const elementsV7 = [
  { id: '1', type: 'input', data: { label: 'Node with one source handle' } },
  {
    id: '2',
    type: 'multiHandleNode',
    data: { label: 'This node contains 2 handles with ids a and b' },
  },
  {
    id: 'e1-2a',
    source: '1',
    target: '2',
    targetHandle: 'a',
  },
  {
    id: 'e1-2a',
    source: '1',
    target: '2',
    targetHandle: 'b',
  },
];
```
