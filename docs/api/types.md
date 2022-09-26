---
title: Types
sidebar_position: 10
---

On this site we collect all types that don't have a place on one of the existing sites.

### `Connection`

```ts
type Connection = {
  source: string | null;
  target: string | null;
  sourceHandle: string | null;
  targetHandle: string | null;
};
```

### `ConnectionMode`

```ts
enum ConnectionMode {
  Strict = 'strict',
  Loose = 'loose',
}
```

### `CoordinateExtent`

```ts
type CoordinateExtent = [[number, number], [number, number];
```

### `DefaultEdgeOptions`

```ts
type DefaultEdgeOptions = {
  type?: string;
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
  data?: T;
  className?: string;
  selected?: boolean;
  markerStart?: EdgeMarkerType;
  markerEnd?: EdgeMarkerType;
  zIndex?: number;
  ariaLabel?: string;
  interactionWidth?: number;
};
```

### `EdgeChange`

```ts
type EdgeSelectionChange = NodeSelectionChange;
type EdgeRemoveChange = NodeRemoveChange;
type EdgeAddChange<EdgeData = any> = {
  item: Edge<EdgeData>;
  type: 'add';
};
type EdgeResetChange<EdgeData = any> = {
  item: Edge<EdgeData>;
  type: 'reset';
};
type EdgeChange = EdgeSelectionChange | EdgeRemoveChange | EdgeAddChange | EdgeResetChange;
```

### `FitBoundsOptions`

```ts
type FitBoundsOptions = {
  duration?: number;
  padding?: number;
};
```

### `FitViewOptions`

```ts
type FitViewOptions = {
  padding?: number;
  includeHiddenNodes?: boolean;
  minZoom?: number;
  maxZoom?: number;
  duration?: number;
};
```

### HandleType

```ts
type HandleType = 'source' | 'target';
```

### `NodeChange`

```ts
type NodeDimensionChange = {
  id: string;
  type: 'dimensions';
  dimensions: Dimensions;
};

type NodePositionChange = {
  id: string;
  type: 'position';
  position?: XYPosition;
  positionAbsolute?: XYPosition;
  dragging?: boolean;
};

type NodeSelectionChange = {
  id: string;
  type: 'select';
  selected: boolean;
};

type NodeRemoveChange = {
  id: string;
  type: 'remove';
};

type NodeAddChange<NodeData = any> = {
  item: Node<NodeData>;
  type: 'add';
};

type NodeResetChange<NodeData = any> = {
  item: Node<NodeData>;
  type: 'reset';
};

type NodeChange =
  | NodeDimensionChange
  | NodePositionChange
  | NodeSelectionChange
  | NodeRemoveChange
  | NodeAddChange
  | NodeResetChange;
```

### OnConnectStartParams

```ts
type OnConnectStartParams = {
  nodeId: string | null;
  handleId: string | null;
  handleType: HandleType | null;
};
```

### OnSelectionChangeParams

```ts
export type OnSelectionChangeParams = {
  nodes: Node[];
  edges: Edge[];
};
```

### `PanelPosition`

```ts
export type PanelPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
```

### `PanOnScrollMode`

```ts
enum PanOnScrollMode {
  Free = 'free',
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}
```

### `ReactFlowJsonObject`

```ts
type ReactFlowJsonObject<NodeData = any, EdgeData = any> = {
  nodes: Node<NodeData>[];
  edges: Edge<EdgeData>[];
  viewport: Viewport;
};
```

### `Rect`

```ts
type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};
```

### `SetCenterOptions`

```ts
type SetCenterOptions = {
  duration?: number;
  zoom?: number;
};
```

### `Viewport`

```ts
type Viewport = {
  x: number;
  y: number;
  zoom: number;
};
```

### `ViewportHelperFunctionOptions`

```ts
type ViewportHelperFunctionOptions = {
  duration?: number;
};
```

### `Transform`

```ts
type transform = [number, number, number]; // [x, y, zoom]
```

### `XYPosition`

```ts
type XYPosition = {
  x: number;
  y: number;
};
```
