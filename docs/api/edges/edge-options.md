---
title: Edge Options
sidebar_position: 1
---

You create edges by adding them to your `edges` or `defaultEdges` array of the `ReactFlow` component.

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
- `data`: {} you can use this to pass data to your custom edges.
- `style`: css properties for the edge line path
- `className`: additional class name
- `label`: string
- `labelStyle`: css properties for the text
- `labelShowBg`: boolean - default: `true`
- `labelBgStyle`: css properties for the text background
- `labelBgPadding`: [number, number] background rectangle padding - default: `[2, 4]`
- `labelBgBorderRadius`: number - default 2
- `hidden`: if `true`, the edge will not be rendered
- `markerStart`: string (id for a svg marker that you need to define yourself) or a [marker configuration object](#markerstart--markerend-options)
- `markerEnd`: see `markerStart`

You can find an example with different edges in the [edges example](/docs/examples/edges/).

### `markerStart` / `markerEnd` options

- `type`: string: default `'arrow'` or `'arrowclosed'`
- `color`: arrow fill color
