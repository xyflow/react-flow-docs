---
title: Edges
sidebar_position: 3
---

You create edges by adding them to your `elements` array of the `ReactFlow` component.

Edge example:

```js
{
  id: 'e1-2',
  type: 'straight',
  source: '1',
  target: '2',
  animated: true,
  label: 'edge label'
}
```

If you wanted to display this edge, you would need a node with id = 1 (source node) and another one with id = 2 (target node).

## Options

- `id`: string _(required)_
- `source`: string (an id of a node) _(required)_
- `target`: string (an id of a node) _(required)_
- `sourceHandle`: string (an id of a handle - you only need this when you have multiple handles)
- `targetHandle`: string (an id of a handle - you only need this when you have multiple handles)
- `type`: 'default' (bezier), 'straight', 'step' and 'smoothstep' or a custom one depending on your implementation
- `animated`: boolean
- `style`: css properties for the edge line path
- `className`: additional class name
- `label`: string
- `labelStyle`: css properties for the text
- `labelShowBg`: boolean - default: `true`
- `labelBgStyle`: css properties for the text background
- `labelBgPadding`: [number, number] background rectangle padding - default: `[2, 4]`
- `labelBgBorderRadius`: number - default 2
- `arrowHeadType`: 'arrow' or 'arrowclosed' - defines the arrowhead of the edge
- `markerEndId`: custom marker end url - if this is used `arrowHeadType` gets ignored
- `isHidden`: if `true`, the edge will not be rendered
- `data`: {} you can use this to pass data to your custom edges.

You can find an example with different edges in the [edges example](/examples/edges/).

## Edge Types

React Flow comes with four edge types (`default`, `straight`, `step`, `smoothstep`). As the names indicate, the edges differ in the representation. The default type is a bezier edge.
The basic edge types are `default` (bezier), `straight`, `step` and `smoothstep`. The default `edgeTypes` object looks like this:

```javascript
{
  default: BezierEdge,
  straight: StraightEdge,
  step: StepEdge,
  smoothstep: SmoothStepEdge
}
```

The keys represent the type names and the values are the edge components.

# Custom Edges

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
- `arrowHeadType`: 'arrow' | 'arrowclosed'
- `sourceX`: number
- `sourceY`: number
- `targetX`: number
- `targetY`: number
- `sourcePosition`: 'left' | 'top' | 'right' | 'bottom'
- `targetPosition`: 'left' | 'top' | 'right' | 'bottom'
- `markerEndId`: string
