---
title: Installation
description: Here's how to install the React Flow package using npm (as react-flow-renderer), and how to include it in your own project
sidebar_position: 1
---

React Flow is published under the `@react-flow` namespace on npm. To install the React Flow viewer (previously `react-flow-renderer`), you need to install the [`@react-flow/core`](https://www.npmjs.com/package/@react-flow/core) package into your project.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @react-flow/core
```

  </TabItem>
  <TabItem value="yarn" label="Yarn">

```bash
yarn add @react-flow/core
```

  </TabItem>
</Tabs>

## Usage

The core package exports the `<ReactFlow />` React component as the default export and hooks (like [`useReactFlow`](/docs/api/hooks/use-react-flow)) and [util functions](/docs/api/graph-util-functions). Additional components like the [`MiniMap`](/docs/api/plugin-components/minimap) or [`Controls`](/docs/api/plugin-components/controls) can be installed with their own packages. When you are importing the `<ReactFlow />` component, the default styles get injected into your website automatically.

```jsx
import ReactFlow from '@react-flow/core';
import MiniMap from '@react-flow/minimap';
import Controls from '@react-flow/controls';

function Flow({ nodes, edges, onNodesChange, onEdgesChange, onConnect }) {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
```

React Flow can also be used as an uncontrolled component without external state management:

```jsx
import ReactFlow from '@react-flow/core';

function Flow({ nodes, edges }) {
  return <ReactFlow defaultNodes={nodes} defaultEdges={edges} />;
}
```

## Terms

In the docs we are using the following terms for the parts of a flow:

- **Node:** A node is a draggable block that can be connected with other nodes.
- **Edge:** An edge is a connection between two nodes.
- **Handle:** A handle is a kind of port of a node that is used to connect nodes. You start a connection at a handle and end it on another one.
- **Connection Line:** The connection line is the line that gets drawn while you connect two nodes with each other.
- **Transform**: Used to describe the current viewport of the pane. It's an array with three numbers: `[x, y, zoom]`.
