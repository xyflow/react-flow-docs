---
title: Custom Edges
sidebar_position: 3
---

If you want to introduce a new edge type you can pass an `edgeTypes` object to the `ReactFlow` component:

```jsx
const Flow = <ReactFlow edgeTypes={{ special: CustomEdgeComponent }} elements={elements} />;
```

Now you could use the new type `special` for an edge.
The `straight`, `default` and `step` types would still be available unless you overwrote one of them.
There is an implementation of a custom edge in the [edges example](/examples/edges/).

## Prop Types

Custom edges are wrapped. They receive the following props:

- `source`: string (node id)
- `target`: string (node id)
- `selected`: boolean
- `animated`: boolean
- `label`: string
- `labelStyle`: svg attributes
- `labelShowBg`: boolean
- `labelBgStyle`: svg attributes
- `labelBgPadding`: number
- `labelBgBorderRadius`: number
- `data`: object
- `style`: svg attributes
- `arrowHeadType`: 'arrow' | 'arrowclosed'
- `sourceX`: number
- `sourceY`: number
- `targetX`: number
- `targetY`: number
- `sourcePosition`: 'left' | 'top' | 'right' | 'bottom'
- `targetPosition`: 'left' | 'top' | 'right' | 'bottom'
- `markerStart`: string or [marker config](#markerstart--markerend-options)
- `markerEnd`: string or [marker config](#markerstart--markerend-options)
