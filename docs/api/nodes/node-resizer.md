---
title: <NodeResizer />
sidebar_position: 6
sidebar_class_name: new
---

import PropItems from '../../../src/components/Docs/PropItems'
import CodeViewer from '../../../src/components/CodeViewer';

The node resizer component can be used to add a resize functionality to your nodes. It renders draggable controls around the node to resize in all directions.

:::info
The `NodeResizer` component is available in `reactflow` version **11.4** and higher.
:::

### Usage Example

<CodeViewer options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} activeFile="CustomNode.js" codePath="api-flows/NodeToolbar" applyStyles={false} additionalFiles={['CustomNode.js', 'TooltipNode.js', 'MultiSelectionToolbar.js']} />

### Prop Types

import options from '../../../docs-data/node-resizer';

<PropItems props={options} />

### Custom Controls

To create your own resizing UI, you can use the `<NodeResizeControl>` component where you can pass children (such as icons).

<CodeViewer options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} activeFile="CustomNode.js" codePath="api-flows/NodeToolbar" applyStyles={false} additionalFiles={['CustomNode.js', 'TooltipNode.js', 'MultiSelectionToolbar.js']} />

The `<NodeResizeControl>` component accepts the following props:

import controlOptions from '../../../docs-data/node-resizer/control';

<PropItems props={controlOptions} />

### Npm Package

The NodeToolbar component is published under `@reactflow/node-resizer` and can also be [installed and used separately](/docs/overview/packages/#node-resizer).
