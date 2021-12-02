---
id: Node Types & Custom Nodes
title: Node Types
---

There are three different node types (`default`, `input`, `output`) you can use. The node types differ in the number and types of handles. An input node has only a source handle, a default node has a source and a target and an output node has only a target handle. The default node types object looks like this:

```js
{
  input: InputNode,
  default: DefaultNode,
  output: OutputNode
}
```

The keys represent the type names and the values are the components that get rendered.

# Custom Nodes

If you want to introduce new node types you need to pass a `nodeTypes` object to the `ReactFlow` component:

```jsx
const Flow = (
  <ReactFlow nodeTypes={{ special: CustomNodeComponent }} elements={elements} />
);
```

You can now use the type `special` for a node.
The `default`, `input` and `output` types would still be available except you overwrote one of them.
There is more advanced example of a custom node implementation in the [custom node example](/examples/custom-node).

## Prop Types

Your custom nodes are wrapped so that the basic functions like dragging or selecting work. Custom nodes receive the following props:

- `id`: string
- `data`: object
- `type`: string
- `selected`: boolean
- `sourcePosition`: string
- `targetPosition`: string

### Styling

When you create a new node type you also need to implement some styling. Your custom node has no default styles.

### Prevent dragging & selecting

If you have controls or other elements inside your custom node that should not drag the node you can add the class name `nodrag`. This also prevents the selection of a node.

### Allow scrolling inside a node

If you want to allow scrolling inside a node or inside an element of a node you can add the class name `nowheel` to the node or the element.

## Basic Implementation

A basic implementation of a custom node could look like this:

```jsx
import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

const elements = [
  {
    id: '2',
    type: 'special',
    position: { x: 100, y: 100 },
    data: { text: 'A custom node' },
  },
];

const customNodeStyles = {
  background: '#9CA8B3',
  color: '#FFF',
  padding: 10,
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <Handle type="target" position="left" style={{ borderRadius: 0 }} />
      <div>{data.text}</div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: '30%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ top: '70%', borderRadius: 0 }}
      />
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

const CustomNodeExample = () => {
  return (
    <div style={{ height: 300 }}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} />
    </div>
  );
};

export default CustomNodeExample;
```

import CustomNodeFlow from './node-types';

<CustomNodeFlow />
