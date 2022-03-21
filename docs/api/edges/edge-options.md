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

| Name                    | Type                                                                               | Description                                                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `id` **(required)**     | `string`                                                                           | Unique identifier                                                                                                                 |
| `source` **(required)** | `string`                                                                           | Id of the source node                                                                                                             |
| `target` **(required)** | `string`                                                                           | Id of the target node                                                                                                             |
| `sourceHandle`          | `string`                                                                           | You only need this when you have multiple handles                                                                                 |
| `targetHandle`          | `string`                                                                           | You only need this when you have multiple handles                                                                                 |
| `type`                  | `'default'` (bezier), `'step'`, `'smoothstep'` or `'straight'` + your custom types |                                                                                                                                   |
| `animated`              | `boolean`                                                                          |                                                                                                                                   |
| `data`                  | `object`                                                                           | Can be used to pass data to your custom edge                                                                                      |
| `hidden`                | `boolean`                                                                          |  if `true`, the edge will not be rendered                                                                                         |
| `label`                 | `string`                                                                           | If this is set, the edge has a label at its center                                                                                |
| `labelStyle`            | `SVGProperties`                                                                    | Attributes for the edge label                                                                                                     |
| `labelShowBg`           | `boolean`                                                                          | If `true` the label has a background                                                                                              |
| `labelBgStyle`          | `SVGProperties`                                                                    |                                                                                                                                   |
| `labelBgPadding`        | `number`                                                                           | )                                                                                                                                 |
| `labelBgBorderRadius`   | `number`                                                                           | This is `2` by default                                                                                                            |
| `markerStart`           | `string` or `object`                                                               | string (id for a svg marker that you need to define yourself) or a [marker configuration object](#markerstart--markerend-options) |
| `markerEnd`             | `string` or `object`                                                               | string (id for a svg marker that you need to define yourself) or a [marker configuration object](#markerstart--markerend-options) |
| `style`                 | `CSSProperties`                                                                    |                                                                                                                                   |
| `className`             | `string`                                                                           |                                                                                                                                   |
| `zIndex`                | `number`, default: `0`                                                             | controls the layer order of the edges                                                                                             |

You can find an example with different edges in the [edges example](/docs/examples/edges/).

### `markerStart` / `markerEnd` options

- `type`: string: default `'arrow'` or `'arrowclosed'`
- `color`: arrow fill color
