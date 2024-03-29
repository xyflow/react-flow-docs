---
title: Edge Options
sidebar_position: 1
---

import PropItems from '../../../src/components/Docs/PropItems'

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

import options from '../../../docs-data/edge-options';

<PropItems props={options} />

<div style={{ marginBottom: 20 }} />

You can find an example with different edges in the [edge types example](/docs/examples/edges/edge-types).

## `markerStart` / `markerEnd` options

- `type`: string: default `'arrow'` or `'arrowclosed'`
- `color`: arrow fill color (optional)
- `width`: marker width (optional)
- `height`: marker width (optional)
- `markerUnits`: [defines coordinate system](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/markerUnits) (optional)
- `orient`: defines rotation - `'auto'` | `'auto-start-reverse'` | `number` (optional)
- `strokeWidth`

## Markers

An edge is a SVG path. SVG paths have a [markerStart](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-start) and a [markerEnd](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-end) attribute. In SVG world you can create a [marker definition](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-end#example) and then use the id on an SVG path element. React Flow comes with two predefined markers. An arrow and a closed arrow. The marker definitions get created dynamically if one of the edges use the `markerStart` or `markerEnd` option. If you want to create a custom marker, you can add marker definitions within your app and use the ids as markerStart and markerEnd edge options as seen in the [Edge Marker example](/docs/examples/edges/markers/).

## Typescript

### Edge

A edge uses the `Edge` type:

```ts
type Edge<T = any> = {
  id: string;
  type?: string;
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
  label?: string | ReactNode;
  labelStyle?: CSSProperties;
  labelShowBg?: boolean;
  labelBgStyle?: CSSProperties;
  labelBgPadding?: [number, number];
  labelBgBorderRadius?: number;
  style?: CSSProperties;
  animated?: boolean;
  hidden?: boolean;
  deletable?: boolean;
  focusable?: boolean;
  data?: T;
  className?: string;
  sourceNode?: Node;
  targetNode?: Node;
  selected?: boolean;
  markerStart?: EdgeMarkerType;
  markerEnd?: EdgeMarkerType;
  zIndex?: number;
  ariaLabel?: string;
  interactionWidth?: number;
};
```

### EdgeMarker

```ts
type EdgeMarker {
  type: MarkerType; // 'arrow' or 'arrowclosed'
  color?: string; // arrow fill color
  width?: number;
  height?: number;
  markerUnits?: string; // defines the coordinate system https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/markerUnits
  orient?: string; // defines rotation - 'auto' | 'auto-start-reverse' | number
  strokeWidth?: number;
}
```

### EdgeMarkerType

```ts
type EdgeMarkerType = string | EdgeMarker;
```

### MarkerType

```ts
enum MarkerType {
  Arrow = 'arrow',
  ArrowClosed = 'arrowclosed',
}
```
