---
title: <MiniMap />
sidebar_position: 3
---

import PropItems from '../../../src/components/Docs/PropItems'
import CodeViewer from '../../../src/components/CodeViewer';

The Minimap component adds an interactive Minimap to React Flow that shows the whole graph. You can use the `MiniMap` plugin by passing it as a child to the `ReactFlow` component.

:::info Interactive Minimap

The minimap is not interactive by default. If you want to control the viewport with the mini map, you need to pass `zoomable` and `pannable`.
:::

### Usage Example

<CodeViewer options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} codePath="api-flows/MiniMap" applyStyles={false} additionalFiles={['nodes.js', 'edges.js']} />

### Prop Types

import options from '../../../docs-data/minimap';

<PropItems props={options} />

## Custom MiniMap Nodes

You can swap out the default component used for nodes in the minimap with whatever
you want by setting the `nodeComponent` prop on the `<MiniMap />` component. Below
is the same example as before, but now we're rendering a circle
instead of a rectangle!

<CodeViewer options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} codePath="api-flows/MiniMapCustomNode" applyStyles={false} additionalFiles={['nodes.js', 'edges.js', 'MiniMapNode.js']} />

:::info You must use SVG

For performance reasons, the minimap is rendered as an SVG. This means that you
**must** use SVG elements for your custom node component if you want it to work
properly.
:::

### Custom Node Prop Types

import customNodeOptions from '../../../docs-data/minimap/custom-node';

<PropItems props={customNodeOptions} />

### Typescript

The interface of both the `<MiniMap />` and custom node props are exported as `MiniMapProps` and `MiniMapNodeProps` respectively.

### Npm Package

The minimap component is published under `@reactflow/minimap` and can also be [installed and used separately](/docs/concepts/packages/#reactflowminimap).
