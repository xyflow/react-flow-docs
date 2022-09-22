---
title: <MiniMap />
sidebar_position: 3
---

import PropItems from '../../../src/components/Docs/PropItems'

The Minimap component adds an interactive Minimap to React Flow that shows the whole graph. You can use the `MiniMap` plugin by passing it as a children to the `ReactFlow` component.

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
      <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} />
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
