---
title: Installation
description: Here's how to install the React Flow package using npm (as reactflow), and how to include it in your own project
sidebar_position: 1
---

Before you can start to use React Flow you need to install [`reactflow`](https://www.npmjs.com/package/reactflow). It's published on npm and installable via:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install reactflow
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add reactflow
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add reactflow
```

  </TabItem>
</Tabs>

## Basic Usage

The `reactflow` package exports the `<ReactFlow />` React component as the default export and further additional components (like the [`MiniMap`](<(/docs/api/plugin-components/minimap)>)), hooks (like [`useReactFlow`](/docs/api/hooks/use-react-flow)) and [util functions](/docs/api/graph-util-functions).

```jsx
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';

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
      <Background />
    </ReactFlow>
  );
}
```

React Flow can also be used as an uncontrolled component without external state management:

```jsx
import ReactFlow from 'reactflow';

function Flow({ nodes, edges }) {
  return <ReactFlow defaultNodes={nodes} defaultEdges={edges} />;
}
```

## Using Packages

The `reactflow` is separated into multiple packages that can be installed separately. All packages are published under the [`@reactflow` organization](https://www.npmjs.com/org/reactflow) on npm. All of the following packages only use **named exports**.

### @reactflow/core

The core package exports the main `<ReactFlow />` component, the `<ReactFlowProvider />`, all hooks and all util functions:

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/core
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/core
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/core
```

  </TabItem>
</Tabs>

#### Usage

```js
import { ReactFlow, useReactFlow } from '@reactflow/core';
```

### @reactflow/background

This package exports the [Background component](/docs/api/plugin-components/background).

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/background
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/background
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/background
```

  </TabItem>
</Tabs>

#### Usage

```js
import { Background } from '@reactflow/background';
```

### @reactflow/controls

This package exports the [Controls and ControlButton component](/docs/api/plugin-components/controls).

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/controls
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/controls
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/controls
```

  </TabItem>
</Tabs>

#### Usage

```js
import { Controls, ControlButton } from '@reactflow/controls';
```

### @reactflow/minimap

This package exports the [MiniMap component](/docs/api/plugin-components/minimap).

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/minimap
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/minimap
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/minimap
```

  </TabItem>
</Tabs>

#### Usage

```js
import { MiniMap } from '@reactflow/minimap';
```

## Terms

In the docs we are using the following terms for the parts of a flow:

- **Node:** A node is a draggable block that can be connected with other nodes.
- **Edge:** An edge is a connection between two nodes.
- **Handle:** A handle is a kind of port of a node that is used to connect nodes. You start a connection at a handle and end it on another one.
- **Connection Line:** The connection line is the line that gets drawn while you connect two nodes with each other.
- **Transform**: Used to describe the current viewport of the pane. It's an array with three numbers: `[x, y, zoom]`.
