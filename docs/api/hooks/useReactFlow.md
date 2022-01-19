---
title: useReactFlow
sidebar_position: 1
---

The following hooks can only be used if the component that uses it is a children of a [`ReactFlowProvider`](/docs/api/components/provider/).

### useZoomPanHelper

It can be used to modify the viewport of the react flow graph. Example:

```javascript
import { useZoomPanHelper } from 'react-flow-renderer';

export default () => {
  const { fitView } = useZoomPanHelper();

  return <button onClick={() => fitView({ padding: 0.2, includeHiddenNodes: true })}></button>;
};
```

The `useZoomPanHelper` hook returns an object containing the following functions:

- `fitView = ({ padding: number, includeHiddenNodes: boolean }): void` - fits the view to the nodes on the pane. `padding` is `0.1` and `includeHiddenNodes` is `false` by default
- `zoomIn = (): void` - zooms in
- `zoomOut = (): void` - zooms out
- `zoomTo = (zoomLevel: number): void` - zooms to passed zoom level
- `transform: (transform: FlowTransform): void` - sets the transform of the pane
- `setCenter: (x: number, y: number, zoom?: number): void` - sets the center to the passed params. If no zoom is passed the maxZoom is used
- `fitBounds: (bounds: Rect, padding?: number): void` - fits the pane to the passed bounds (object with width x, y, width and height: `{ x: 0, y: 0, width: 100, height: 100 }`)
- `project: (position: XYPosition) => XYPosition`: Transforms pixel coordinates to the internal ReactFlow coordinate system. This can be used when you drag nodes (from a side bar for example) and need the internal position on the pane.
- `initialized: boolean` - `true` when hook is initialized

You can find an example of how to use it here: [useZoomPanHelper example](/examples/use-zoom-pan-helper-hook/)

### useUpdateNodeInternals

When you are **programatically changing the number or the position of handles inside a custom node** you need to notify react flow about it with the `useUpdateNodeInternals` hook. It also updates the internal size. Usage:

```javascript
import { useUpdateNodeInternals } from 'react-flow-renderer';

export default () => {
  const updateNodeInternals = useUpdateNodeInternals();

  return <button onClick={() => updateNodeInternals('node-id')}></button>;
};
```
