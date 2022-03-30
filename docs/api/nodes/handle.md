---
title: <Handle />
sidebar_position: 4
---

We export a `Handle` component as a helper for your custom nodes:

```js
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

| Name                | Type                                       | Default                                             | Description                                                                                                                                                                         |
| ------------------- | ------------------------------------------ | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`              | `'source'` or `'target'`                   | `'source'`                                          | Defines the handle type                                                                                                                                                             |
| `id`                | `string`                                   | `undefined`                                         | You only need this when you have multiple source or target handles (otherwise the node id is used)                                                                                  |
| `position`          | `'left'`, `'right'`, `'top'` or `'bottom'` | `'top'` for type target, `'bottom'` for type source | Handle position                                                                                                                                                                     |
| `onConnect`         | `function`                                 | `undefined`                                         | Gets triggered on connect. This callback only gets executed on source handles.                                                                                                      |
| `isValidConnection` | `function`                                 | `undefined`                                         | Receives a connection `{ target: 'some-id', source: 'another-id', sourceHandle: 'source handle id or null', targetHandle: 'target handle id or null' }` as param, returns a boolean |
| `isConnectable`     | `boolean`                                  | `true`                                              | boolean (this prop gets passed to your custom node component)                                                                                                                       |
| `style`             | `CSSProperties`                            | `undefined`                                         | Controls style attributes                                                                                                                                                           |
| `className`         | `string`                                   | `undefined`                                         | Additional class name                                                                                                                                                               |

**Typescript:** The interface of the Handle Prop Types are exported as `HandleComponentProps`.

### Validation

The handle receives the additional class names `connecting` when the connection line is above the handle and `valid` if the connection is valid. You can find an example which uses these classes [here](/docs/examples/validation/).

### Multiple Handles

If you need multiple source or target handles you can achieve this by creating a custom node. Normally you just use the id of a node for the `source` or `target` of an edge. If you have multiple source or target handles you need to pass an id to these handles. These ids can be used by an edge with the `sourceHandle` and `targetHandle` options, so that you can connect a specific handle. If you have a node with an id = `1` and a handle with an id = `a` you can connect this handle by using the node `source=1` and the `sourceHandle=a`.

You can find an example of how to implement a custom node with multiple handles in the [custom node guide](/docs/guides/custom-nodes) or in the [custom node example](/docs/examples/custom-node/).
