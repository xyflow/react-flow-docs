---
title: Edge Utils
sidebar_position: 5
---

import Link from '@docusaurus/Link';
import PropItem from '../../../src/components/Docs/PropItem'

There are several utils that help you to create a custom edge. Some are used in the [custom edge example](/docs/examples/edges/custom-edge).

### `getBezierPath`

<PropItem description={<>Returns the path of a bezier edge</>} type={<>
(params: <Link to="#getbezierpathparams">GetBezierPathParams</Link>) => string
</>} />

### `getSmoothStepPath`

<PropItem description={<>Returns the path of a smooth step edge. You can set <code>borderRadius = 0</code> to get a step edge path</>} type={<>
(params: <Link to="#getsmoothsteppathparams">GetSmoothStepPathParams</Link>) => string
</>} />

### `getSimpleBezierPath`

<PropItem description={<>Returns the path of a simple bezier edge</>} type={<>
(params: <Link to="#getbezierpathparams">GetBezierPathParams</Link>) => string
</>} />

### `getEdgeCenter`

<PropItem description={<>Returns the center position and offset <code>[centerX, centerY, offsetX, offsetY]</code> of the edge</>} type={<>
(params: <Link to="#getcenterparams">GetCenterParams</Link>) => [number, number, number, number]
</>} />

### `getBezierEdgeCenter`

<PropItem description={<>Returns the center position and offset <code>[centerX, centerY, offsetX, offsetY]</code> a bezier edge</>} type={<>
(params: <Link to="#getbezierpathparams">GetBezierPathParams</Link>) => [number, number, number, number]
</>} />

### `getSimpleBezierEdgeCenter`

<PropItem description={<>Returns the center position and offset <code>[centerX, centerY, offsetX, offsetY]</code> a simple bezier edge</>} type={<>
(params: <Link to="#getsimplebezierpathparams">GetSimpleBezierPathParams</Link>) => [number, number, number, number]
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

### `GetCenterParams`

```ts
type GetCenterParams = {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition?: Position;
  targetPosition?: Position;
};
```
