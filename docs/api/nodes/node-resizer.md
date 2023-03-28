---
title: <NodeResizer />
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import PropItems from '../../../src/components/Docs/PropItems'
import CodeViewer from '../../../src/components/CodeViewer';

The node resizer component can be used to add a resize functionality to your nodes. It renders draggable controls around the node to resize in all directions.

:::info
Since `reactflow@11.7.0` the `NodeResizer` component is part of the `reactflow` package. If you are using a version < 11.7.0, you need to install it separately.
:::

### Getting Started

The `reactflow` package exports two node resizer related components: `NodeResizer` and `NodeResizeControl`.

```jsx
import { NodeResizer, NodeResizeControl } from 'reactflow';
```

### Usage Example

The NodeResizer gets used in custom nodes. Beware that we are not passing width or height to a custom node. If you want to re-render your custom node on resize, you can [access the node dimensions](/docs/api/nodes/custom-nodes/#dimensions-and-other-values-from-a-node) with the useStore function.

<CodeViewer options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} activeFile="ResizableNode.js" codePath="api-flows/NodeResizer" applyStyles={false} additionalFiles={['ResizableNode.js', 'ResizableNodeSelected.js', 'CustomResizerNode.js']} dependencies={{ '@reactflow/node-resizer': '2.0.0' }} />

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
