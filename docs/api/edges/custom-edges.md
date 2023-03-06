---
title: Custom Edges
sidebar_position: 3
---

If you want to introduce a new edge type you can pass an `edgeTypes` object to the `ReactFlow` component:

```jsx
function Flow({ nodes, edges }) {
  const edgeTypes = useMemo(() => ({ special: CustomEdgeComponent }), []);

  return <ReactFlow edgeTypes={edgeTypes} nodes={nodes} edges={edges} />;
}
```

Now you can use the new type `special` for an edge.
The `straight`, `default` and `step` types are still available unless you overwrite one of them.
With a custom edge you can create editable edges or edges with controls like a button for example.

### Passed Prop Types

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
- `sourceX`: number
- `sourceY`: number
- `targetX`: number
- `targetY`: number
- `sourcePosition`: 'left' | 'top' | 'right' | 'bottom'
- `targetPosition`: 'left' | 'top' | 'right' | 'bottom'
- `markerStart`: string or [marker config](/docs/api/edges/edge-options/#edgemarker)
- `markerEnd`: string or [marker config](/docs/api/edges/edge-options/#edgemarker)
- `interactionWidth`: number

### Custom edge examples

- [Custom Edge](/docs/examples/edges/custom-edge)
- [Edge with Button](/docs/examples/edges/edge-with-button/)
- [EdgeLabelRenderer](/docs/examples/edges/edge-label-renderer/)

### Helper components and functions

React Flow comes with some helpers to simplify a custom edge implementation.

- [Edge Utils](/docs/api/edges/edge-utils/): helpers for creating paths
- [BaseEdge component](/docs/api/edges/base-edge/): can be used for getting interactionWidth and edge label features
- [EdgeLabelRenderer component](/docs/api/edges/edge-label-renderer/): helper for rendering div based labels (instead of svg based labels)
