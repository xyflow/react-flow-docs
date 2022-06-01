---
title: Installation
sidebar_position: 1
---

Before you can start to use React Flow you need to install `react-flow-renderer`. It's published on [npm](https://www.npmjs.com/package/react-flow-renderer) and installable via:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install react-flow-renderer
```

  </TabItem>
  <TabItem value="yarn" label="Yarn">

```bash
yarn add react-flow-renderer
```

  </TabItem>
</Tabs>

## Usage

The `react-flow-renderer` package exports the `<ReactFlow />` React component as the default export and additional components (like [`MiniMap`](/docs/api/plugin-components/minimap)), hooks (like [`useReactFlow`](/docs/api/hooks/use-react-flow)) and [util functions](/docs/api/graph-util-functions). When you are importing the `<ReactFlow />` component, the default styles get injected to the head. If you don't want to inject the styles, you can load the component via `react-flow-renderer/nocss` (more information in the [theming section](/docs/guides/theming)).

```jsx
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

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
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

function Flow({ nodes, edges }) {
  return (
    <ReactFlow defaultNodes={nodes} defaultEdges={edges}>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
```

## Terms

In the docs we are using the following terms for the parts of a flow:

- **Node:** A node is a draggable block that can be connected with other nodes.
- **Edge:** An edge is a connection between two nodes.
- **Handle:** A handle is a kind of port of a node that is used to connect nodes. You start a connection at a handle and end it on another one.
- **Connection Line:** The connection line is the line that gets drawn while you connect two nodes with each other.
- **Transform**: Used to describe the current viewport of the pane. It's an array with three numbers: `[x, y, zoom]`.
