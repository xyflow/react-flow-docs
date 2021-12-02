---
title: Edge Utils
---

There are several utils that help you to create a custom edge. Some are used in the [edges example](/examples/edges).

### `getBezierPath`

Returns the path of a bezier edge.

```
import { getBezierPath } from 'react-flow-renderer';

getBezierPath({
  sourceX,
  sourceY,
  sourcePosition = Position.Bottom, // optional
  targetX,
  targetY,
  targetPosition = Position.Top, // optional
  centerX, // optional
  centerY, // optional
}: GetBezierPathParams): string
```

### `getSmoothStepPath`

Returns the path of a smooth step edge. You can set `borderRadius` = `0` to get a step edge path.

```
import { getSmoothStepPath } from 'react-flow-renderer';

getSmoothStepPath({
  sourceX,
  sourceY,
  sourcePosition = Position.Bottom, // optional
  targetX,
  targetY,
  targetPosition = Position.Top, // optional
  borderRadius = 5, // optional
  centerX, // optional
  centerY, // optional
}: GetSmoothStepPathParams): string
```

### `getEdgeCenter`

Returns the center position and offset `[centerX, centerY, offsetX, offsetY]` of the edge.

```
import { getEdgeCenter } from 'react-flow-renderer';

getEdgeCenter({
  sourceX,
  sourceY,
  targetX,
  targetY
}: GetCenterParams): [number, number, number, number]
```

### `getMarkerEnd`

Returns the marker end url for displaying the arrow head.

```
import { getMarkerEnd } from 'react-flow-renderer';

getMarkerEnd(arrowHeadType?: ArrowHeadType, markerEndId?: string): string
```

### `EdgeText`

The internal component that is used for displaying the edge label:

```js
import { EdgeText } from 'react-flow-renderer';

<EdgeText
  x={100}
  y={100}
  label="a label"
  labelStyle={{ fill: 'white' }}
  labelShowBg
  labelBgStyle={{ fill: 'red' }}
  labelBgPadding={[2, 4]}
  labelBgBorderRadius={2}
/>;
```

Besides the mentioned props you can pass all standard React HTML attributes like `onClick`, `className` and so on.
