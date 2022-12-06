---
title: <NodeResizer />
sidebar_position: 6
sidebar_class_name: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import PropItems from '../../../src/components/Docs/PropItems'
import CodeViewer from '../../../src/components/CodeViewer';

The node resizer component can be used to add a resize functionality to your nodes. It renders draggable controls around the node to resize in all directions.

:::info
The `NodeResizer` component is **not** part of the `reactflow` package. You need to install it seperately.
:::

### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/node-resizer
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/node-resizer
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/node-resizer
```

  </TabItem>
</Tabs>

### Getting Started

The `node-resizer` package exports two components: `NodeResizer` and `NodeResizeControl`. You need to import the default styles, too.

```jsx
import { NodeResizer, NodeResizeControl } from '@reactflow/node-resizer';
import '@reactflow/node-resizer/dist/style.css';
```

### Usage Example

<CodeViewer options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} activeFile="ResizableNode.js" codePath="api-flows/NodeResizer" applyStyles={false} additionalFiles={['ResizableNode.js', 'ResizableNodeSelected.js', 'CustomResizerNode.js']} dependencies={{ '@reactflow/node-resizer': '1.0.2' }} />

## `<NodeResizer />` Component

The NodeResizer component is a helper component that can be used inside a custom node to add resizing controls.

### Prop Types

import options from '../../../docs-data/node-resizer';

<PropItems props={options} />

## `<NodeResizeControl />` Component

To create your own resizing UI, you can use the `NodeResizeControl` component where you can pass children (such as icons).

### Prop Types

import controlOptions from '../../../docs-data/node-resizer/control';

<PropItems props={controlOptions} />

### Typescript

The `node-resizer` package exports the prop type definitions for the components:

- `NodeResizerProps`
- `ResizeControlProps`
