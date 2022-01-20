---
title: Nodes
sidebar_position: 3
---

You create nodes by adding them to the `nodes` or `defaultNodes` array of the `ReactFlow` component.

Node example:

```js
{
  id: '1',
  type: 'input',
  data: { label: 'Node 1' },
  position: { x: 250, y: 5 }
}
```

## Options

- `id`: string _(required)_
- `position`: { x: number, y: number } _(required)_
- `data`: {} _(required)_
- `type`: 'input' | 'output' | 'default' or a custom one you implemented
- `style`: css properties
- `className`: additional class name
- `targetPosition`: 'left' | 'right' | 'top' | 'bottom' handle position - default: 'top'
- `sourcePosition`: 'left' | 'right' | 'top' | 'bottom' handle position - default: 'bottom'
- `parentNode`: id of the parent node
- `expandParent`: boolean
- `extent`: extent (for example `[0,0,200,200]`) or `'parent'` if it's a child that shouln't leave the parent node
- `hidden`: boolean - if `true`, the node will not be rendered
- `draggable`: boolean - if option is not set, the node is draggable (overwrites general `nodesDraggable` option)
- `connectable`: boolean - if option is not set, the node is connectable (overwrites general `nodesConnectable` option)
- `selectable`: boolean - if option is not set, the node is selectable (overwrites general `elementsSelectable` option)
- `dragHandle`: string - selector for specifying an element as a drag handle

## Update Node Options

If you want to update the `data` or `style` attribute of a node it is important that you create a new object to notify react flow about the changes. You can see how to update a node in the [update node example](/examples/update-node/).

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
const Flow = <ReactFlow nodeTypes={{ special: CustomNodeComponent }} elements={elements} />;
```

You can now use the type `special` for a node.
The `default`, `input` and `output` types would still be available except you overwrote one of them.
There is more advanced example of a custom node implementation in the [custom node example](/examples/custom-node).

## Prop Types

Your custom nodes are wrapped so that the basic functions like dragging or selecting work. Custom nodes receive the following props:

- `id`: string
- `data`: object
- `type`: string
- `xPos`: number
- `yPos`: number
- `zIndex`: number
- `selected`: boolean
- `sourcePosition`: string
- `targetPosition`: string
- `dragging`: boolean
- `isConnectable`: boolean
- `dragHandle`: string

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
      <Handle type="source" position="right" id="a" style={{ top: '30%', borderRadius: 0 }} />
      <Handle type="source" position="right" id="b" style={{ top: '70%', borderRadius: 0 }} />
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
