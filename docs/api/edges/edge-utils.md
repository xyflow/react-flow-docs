---
title: Edge Utils
sidebar_position: 5
---

import Link from '@docusaurus/Link';
import PropItem from '../../../src/components/Docs/PropItem'

There are several utils that help you to create a custom edge. Some are used in the [custom edge example](/docs/examples/edges/custom-edge).

### `getBezierPath`

<PropItem description={<>Returns the <code>path</code>, <code>labelX</code>, <code>labelY</code>, <code>offsetX</code> and <code>offsetY</code> of a bezier edge</>} type={<>
(params: <Link to="#getbezierpathparams">GetBezierPathParams</Link>) => [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number]
</>} />

### `getSimpleBezierPath`

<PropItem description={<>Returns the <code>path</code>, <code>labelX</code>, <code>labelY</code>, <code>offsetX</code> and <code>offsetY</code> of a simple bezier edge</>} type={<>
(params: <Link to="#getbezierpathparams">GetBezierPathParams</Link>) => [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number]
</>} />

### `getSmoothStepPath`

<PropItem description={<>Returns the <code>path</code>, <code>labelX</code>, <code>labelY</code>, <code>offsetX</code> and <code>offsetY</code> of a smooth step edge. You can set <code>borderRadius = 0</code> to get a step edge path</>} type={<>
(params: <Link to="#getsmoothsteppathparams">GetSmoothStepPathParams</Link>) => [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number]
</>} />

### `getStraightPath`

<PropItem description={<>Returns the <code>path</code>, <code>labelX</code>, <code>labelY</code>, <code>offsetX</code> and <code>offsetY</code> of a simple bezier edge</>} type={<>
(params: <Link to="#getstraightpathparams">GetStraightPathParams</Link>) => [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number]
</>} />

### `getMarkerEnd`

<PropItem description={<>Returns the marker end url for displaying the arrow head</>} type={<>
(markerType?: <Link to="/docs/api/edges/edge-options/#markertype">MarkerType</Link>, markerEndId?: string) => string
</>} />

## Typescript

### `GetBezierPathParams`

```ts
type GetBezierPathParams = {
  sourceX: number;
  sourceY: number;
  sourcePosition?: Position;
  targetX: number;
  targetY: number;
  targetPosition?: Position;
  curvature?: number;
};
```

### `GetSimpleBezierPathParams`

```ts
type GetSimpleBezierPathParams {
  sourceX: number;
  sourceY: number;
  sourcePosition?: Position;
  targetX: number;
  targetY: number;
  targetPosition?: Position;
}
```

### `GetSmoothStepPathParams`

```ts
type GetSmoothStepPathParams = {
  sourceX: number;
  sourceY: number;
  sourcePosition?: Position;
  targetX: number;
  targetY: number;
  targetPosition?: Position;
  borderRadius?: number;
  centerX?: number;
  centerY?: number;
  offset?: number;
};
```

### `GetStraightPathParams`

```ts
type GetStraightPathParams {
  sourceX: number;
  sourceY: number;
  sourcePosition?: Position;
  targetX: number;
  targetY: number;
  targetPosition?: Position;
}
```
