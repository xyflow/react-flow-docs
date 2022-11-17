---
title: Graph Util Functions
sidebar_position: 3
---

import Link from '@docusaurus/Link';
import PropItem from '../../src/components/Docs/PropItem'

If you are working with a controlled flow and you want to apply the changes to select, drag or remove a node or edge or if you want to connect two nodes with each other you need to pass the `onNodesChange`/ `onEdgesChange` and `onConnect` handlers. In order to simplify this process there are some helper functions you can use:

```javascript
import ReactFlow, { isNode, isEdge, applyNodeChanges, applyEdgeChanges, addEdge } from 'reactflow';
```

### `isEdge`

<PropItem description={<>Returns <code>true</code> if the passed element is an edge</>} type={<>
(item: any) => element is <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>
</>} />

### `isNode`

<PropItem description={<>Returns <code>true</code> if the passed element is a node</>} type={<>
(item: any) => element is <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>
</>} />

### `applyNodeChanges`

<PropItem description={<>Returns an array of nodes with the applied changes</>} type={<>
(changes: <Link to="/docs/api/types/#nodechange">NodeChange</Link>[], nodes: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) => <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]
</>} />

### `applyEdgeChanges`

<PropItem description={<>Returns an array of edges with the applied changes</>} type={<>
(changes: <Link to="/docs/api/types/#edgechange">EdgeChange</Link>[], edges: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]) => <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]
</>} />

### `addEdge`

<PropItem description="Returns an array of edges with the added edge" type={<>
(edgeParams: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>, edges: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]): <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]
</>} />

### `updateEdge`

<PropItem description={<>Can be used as a helper for <code>onEdgeUpdate</code>. Returns the edges with the updated edge</>} type={<>
(oldEdge: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>, newConnection: <Link to="/docs/api/types/#connection">Connection</Link>, edges: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]) => void
</>} />

### `getOutgoers`

<PropItem description="Returns all direct child nodes of the passed node" type={<>
(node: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>, nodes: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[], edges: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]) => <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]
</>} />

### `getIncomers`

<PropItem description="Returns all direct incoming nodes of the passed node" type={<>
(node: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>, nodes: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[], edges: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]) => <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]
</>} />

### `getConnectedEdges`

<PropItem description="Returns all edges that are connected to the passed nodes" type={<>
(nodes: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[], edges: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]) => <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]
</>} />

### `getTransformForBounds`

<PropItem description={<>Returns the <Link to="/docs/api/types/#transform">Transform</Link> (<code>[x, y, zoom]</code>) for the passed params</>} type={<>
(bounds: <Link to="/docs/api/types/#rect">Rect</Link>, width: number, height: number, minZoom: number, maxZoom: number, padding: number = 0.1) => <Link to="/docs/api/types/#transform">Transform</Link>
</>} />

### `getRectOfNodes`

<PropItem description={<>Returns the <Link to="/docs/api/types/#rect">rect</Link> (<code>&#123; x: number, y: number, width: number, height: number &#125;</code>) for the passed nodes array</>} type={<>
(nodes: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) => <Link to="/docs/api/types/#rect">Rect</Link>
</>} />
