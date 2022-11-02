---
title: <MiniMap />
sidebar_position: 3
---

import PropItems from '../../../src/components/Docs/PropItems'

The Minimap component adds an interactive Minimap to React Flow that shows the whole graph. You can use the `MiniMap` plugin by passing it as a children to the `ReactFlow` component.

:::info Interactive Minimap

The minimap is not interactive by default. If you want to control the viewport with the mini map, you need to pass `zoomable` and `pannable`.
:::

### Usage

```jsx
import ReactFlow, { MiniMap } from 'reactflow';

const nodeColor = (node) => {
  switch (node.type) {
    case 'input':
      return 'red';
    case 'default':
      return '#00ff00';
    case 'output':
      return 'rgb(0,0,255)';
    default:
      return '#eee';
  }
};

function FlowWithMiniMap() {
  return (
    <ReactFlow defaultNodes={[]}>
      <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
    </ReactFlow>
  );
}
```

### Prop Types

import options from '../../../docs-data/minimap';

<PropItems props={options} />

### Typescript

The interface of the MiniMap Prop Types are exported as `MiniMapProps`.

### Npm Package

The minimap component is published under `@reactflow/minimap` and can also be [installed and used separately](/docs/overview/packages/#reactflowminimap).
