---
title: React Flow Instance
---

You can receive a `reactFlowInstance` by using the `onLoad` callback or with `useReactFlow` hook:

```javascript
import React from 'react';
import ReactFlow from 'react-flow-renderer';

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
};

const BasicFlow = () => <ReactFlow onLoad={onLoad} elements={[]} />;
```

The `reactFlowInstance` has the following functions:

### `project`

Transforms pixel coordinates to the internal ReactFlow coordinate system.
This can be used when you drag nodes (from a side bar for example) and need the internal position on the pane.

`project = (position: XYPosition): XYPosition`

**example:**

```
reactFlowInstance.project({ x: 100, y: 100 });
```

### `fitView`

Fits the view port so that all nodes are visible. `padding` is `0.1` and `includeHiddenNodes` is `false` by default.

`fitView = ({ padding, includeHiddenNodes }): void`

**example:**

```
reactFlowInstance.fitView({ padding: 0.25, includeHiddenNodes: true });
```

### `zoomIn`

Zoom in

`zoomIn = (): void`

### `zoomOut`

Zoom out

`zoomOut = (): void`

### `zoomTo`

Zooms to the specified zoom level

`zoomTo = (zoomLevel: number): void`

### `setTransform`

Sets position and zoom of the pane.

`setTransform = (transform: FlowTransform): void`

**example:**

```
reactFlowInstance.setTransform({ x: 100, y: 100, zoom: 1.5 });
```

### `toObject`

Returns `elements`, `position` and `zoom` of the current flow state

```
toObject = (): {
  elements: Elements,
  position: [x, y],
  zoom: scale,
}
```

### `getElements`

`getElements = (): Elements`
