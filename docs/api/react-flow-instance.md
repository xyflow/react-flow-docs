---
title: ReactFlow Instance
sidebar_position: 2
---

You can receive a `reactFlowInstance` by using the [`onInit` callback](/docs/api/reactflow#event-handlers) or the [`useReactFlow` hook](/docs/api/hooks/useReactFlow):

The `reactFlowInstance` has the following functions:

### Nodes and Edges

- `getNodes = (): Node[]` - returns nodes array
- `getNode = (id: string): Node` - returns a node by id
- `setNodes = (nodes: Node[] | (nodes: Node[]) => Node[])` - sets the nodes
- `addNodes = (nodes: Node[] | Node)` - adds one or multiple nodes
- `getEdges = (): Edge[]` - returns edges array
- `getEdge = (id: string): Edge` - returns an edge by id
- `setEdges = (edges: Edge[] | (edges: Edge[]) => Edge[])` - sets the edges
- `addEdges = (edges: Edge[] | Edge)` - adds one or multiple edges
- `toObject = ()` - returns `nodes`, `edges` and `viewport`

### Viewport

- `fitView = ({ padding: number, includeHiddenNodes: boolean }): void` - fits the view to the nodes on the pane. `padding` is `0.1` and `includeHiddenNodes` is `false` by default
- `zoomIn = (): void` - zooms in
- `zoomOut = (): void` - zooms out
- `zoomTo = (zoomLevel: number): void` - zooms to passed zoom level
- `setViewport: (viewport: Viewport): void` - sets the viewport of the pane
- `setCenter: (x: number, y: number, zoom?: number): void` - sets the center to the passed params. If no zoom is passed the maxZoom is used
- `fitBounds: (bounds: Rect, padding?: number): void` - fits the pane to the passed bounds (object with width x, y, width and height: `{ x: 0, y: 0, width: 100, height: 100 }`)
- `project: (position: XYPosition) => XYPosition`: Transforms pixel coordinates to the internal ReactFlow coordinate system. This can be used when you drag nodes (from a side bar for example) and need the internal position on the pane.
- `viewportInitialized: boolean` - `true` when the viewport is initialized
