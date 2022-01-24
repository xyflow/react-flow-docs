---
title: Installation
sidebar_position: 1
---

Before you can start to use React Flow you need to install `react-flow-renderer`. It's published on [npm](https://www.npmjs.com/package/react-flow-renderer) and installable via:

```bash
npm install react-flow-renderer
```

or

```bash
yarn add react-flow-renderer
```

## Usage

The `react-flow-renderer` package exports the `ReactFlow` React component as the default export and some aditional components (like [`MiniMap`](/docs/api/components/minimap) and [`Controls`](/docs/api/components/controls)) and [util functions](/docs/api/utils/graph-utils).

```jsx
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

function Flow({ nodes, edges, onNodesChange, onEdgesChange }) {
  return (
    <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
```

## Default Styles

React Flow comes with some default styles. If you don't want them to load you can import the ReactFlow component from `react-flow-renderer/nocss`:

```jsx
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer/nocss';
```

You can find more information about the styles in the [theming section](/docs/theming).

## Terms

In the docs we are using the following terms for the components of a flow:

- **Node:** A node is a draggable block that can be connected with other nodes.
- **Edge:** An edge is a connection between two nodes.
- **Handle:** A handle is a kind of port of a node that is used to connect nodes. You start a connection at a handle and end it on another one.
- **Connection Line:** The connection line is the line that gets drawn while you connect two nodes with each other.
