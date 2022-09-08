---
title: Graph Util Functions
sidebar_position: 4
---

If you are working with a controlled flow and you want to apply the changes to select, drag or remove a node or edge or if you want to connect two nodes with each other you need to pass the `onNodesChange`/ `onEdgesChange` and `onConnect` handlers. In order to simplify this process there are some helper functions you can use:

```javascript
import ReactFlow, { isNode, isEdge, applyNodeChanges, applyEdgeChanges, addEdge } from 'reactflow';
```

### `isEdge`

Returns `true` if the passed element is an edge.

`isEdge(item: any): element is Edge`

### `isNode`

Returns `true` if the passed element is a node.

`isNode(item: any): element is Node`

### `applyNodeChanges`

Returns an array of nodes with the applied changes.

`applyNodeChanges(changes: NodeChange[], nodes: Node[]): Node[]`

### `applyEdgeChanges`

Returns an array of edges with the applied changes.

`applyEdgeChanges(changes: EdgeChange[], edges: Edge[]): Edge[]`

### `addEdge`

Returns an array of edges with the added edge.

`addEdge(edgeParams: Edge, edges: Edge[]): Edge[]`

### `updateEdge`

Can be used as a helper for `onEdgeUpdate`. Returns the edges with the updated edge.

`updateEdge(oldEdge: Edge, newConnection: Connection, edges: Edge[])`

### `getOutgoers`

Returns all direct child nodes of the passed node.

`getOutgoers(node: Node, nodes: Node[], edges: Edge[]): Node[]`

### `getIncomers`

Returns all direct incoming nodes of the passed node.

`getIncomers(node: Node, nodes: Node[], edges: Edge[]): Node[]`

### `getConnectedEdges`

Returns all edges that are connected to the passed nodes.

`getConnectedEdges(nodes: Node[], edges: Edge[]): Edge[]`

You can use these function as seen in [this example](https://github.com/wbkd/react-flow/blob/main/example/src/Overview/index.tsx#L100) or use your own ones.

### `getTransformForBounds`

Returns the transform (`[number, number, number]`/ `[x, y, zoom]`) for the passed params.

`getTransformForBounds = (bounds: Rect, width: number, height: number, minZoom: number, maxZoom: number, padding: number = 0.1): Transform`

### `getRectOfNodes`

Returns the rect (`{ x: number, y: number, width: number, height: number }`) for the passed nodes array.

`getRectOfNodes = (nodes: Node[]): Rect`
