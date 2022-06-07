---
title: ReactFlow Instance
sidebar_position: 2
---

You can receive a `reactFlowInstance` by using the [`onInit` callback](/docs/api/react-flow-props#event-handlers) or the [`useReactFlow` hook](/docs/api/hooks/use-react-flow):

The `reactFlowInstance` has the following functions:

## Nodes and Edges

### `getNodes`

Returns array of nodes.

`getNodes(): Node[]`

### `getNode`

Returns a node by id.

`getNode(id: string): Node | undefined`

### `setNodes`

Sets nodes array.

`setNodes(nodes: Node[] | (nodes: Node[]) => Node[]): void`

### `addNodes`

Adds one or multiple nodes

`addNodes(nodes: Node | Node[]): void`

### `getEdges`

Returns array of edges.

`getEdges(): Edge[]`

### `getEdge`

Returns a edge by id.

`getEdge(id: string): Edge | undefined`

### `setEdges`

Sets edges array.

`setEdges(edges: Edge[] | (edges: Edge[]) => Edge[]): void`

### `addEdges`

Adds one or multiple edges.

`addEdges(edges: Edge | Edge[]): void`

### `toObject`

Returns nodes, edges and viewport.

`toObject(): { nodes, edges, viewport }: ReactFlowJsonObject`

## Viewport

### `fitBounds`

Fits the pane to the passed bounds (object with width x, y, width and height: `{ x: 0, y: 0, width: 100, height: 100 }`)

`fitBounds({ x, y, width, height }: Rect, { padding, duration }?: FitBoundsOptions): void`

### `fitView`

Fits the view to the nodes on the pane. `padding` is `0.1` and `includeHiddenNodes` is `false` by default.

`fitView({ padding: number, includeHiddenNodes: boolean }?: FitViewOptions): void`

### `zoomIn`

Zooms in.

`zoomIn({ duration }?: ViewportHelperFunctionOptions): void`

### `zoomOut`

Zooms out.

`zoomOut({ duration }?: ViewportHelperFunctionOptions): void`

### `zoomTo`

Zooms to passed zoom level.

`zoomTo(zoomLevel: number, { duration }?: ViewportHelperFunctionOptions): void`

### `getZoom`

Returns the current zoom level.

`getZoom(): number`

### `setViewport`

Sets the viewport of the pane.

`setViewport({ x, y, zoom }: Viewport, { duration }?: ViewportHelperFunctionOptions): void`

### `getViewport`

Returns the viewport of the pane.

`getViewport(): { x, y, zoom }: Viewport`

### `setCenter`

Sets the center to the passed params. If no zoom is passed the maxZoom is used.

`setCenter(x: number, y: number, { zoom, duration }?: SetCenterOptions): void`

### `project`

Transforms pixel coordinates to the internal ReactFlow coordinate system. This can be used when you drag nodes (from a side bar for example) and need the internal position on the pane.

`({ x, y }: XYPosition): { x, y }: XYPosition`

### `viewportInitialized`

Boolean property to determine if React Flow has been initialized with all its event listeners.
