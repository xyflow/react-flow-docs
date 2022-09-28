---
title: Quickstart
description: React Flow quickstart that shows how to install the package, use it and where to find example apps
sidebar_position: 2
---

For folks who want to get React Flow up and running fast and figure out the details later, this is the site for you.

## Installation

React Flow is published on npm as [`reactflow`](https://npmjs.com/package/reactflow).

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

The `reactflow` package exports the `<ReactFlow />` React component as the default export. Additionally, it exports plugin components (like the [`MiniMap`](/docs/api/plugin-components/minimap)), hooks (like [`useReactFlow`](/docs/api/hooks/use-react-flow)) and [helper functions](/docs/api/graph-util-functions).

```jsx
import { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
// 👇 you need to import the reactflow styles
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

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

## Example Applications

To make it easier to get started, we created basic example apps that can be used as a starting point:

- [Create React App](https://github.com/wbkd/react-flow-example-apps/tree/main/reactflow-create-react-app)
- [Next.js](https://github.com/wbkd/react-flow-example-apps/tree/main/reactflow-nextjs)
- [Remix](https://github.com/wbkd/react-flow-example-apps/tree/main/reactflow-remix)

#### Codesandbox Templates

- [Javascript](https://codesandbox.io/s/react-flow-starter-ou8or)
- [Typescript](https://codesandbox.io/s/react-flow-starter-typescript-j8lkh)
