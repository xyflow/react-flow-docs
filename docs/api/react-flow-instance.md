---
title: ReactFlow Instance
sidebar_position: 2
---

import Link from '@docusaurus/Link';
import PropItem from '../../src/components/Docs/PropItem'

You can receive a `reactFlowInstance` by using the [`onInit` callback](/docs/api/react-flow-props#event-handlers) or the [`useReactFlow` hook](/docs/api/hooks/use-react-flow):

The `reactFlowInstance` has the following functions:

## Nodes and Edges

### `getNodes`

<PropItem description="Return array of nodes" type={<>
() => <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]
</>} />

### `getNode`

<PropItem description="Return a node by id" type={<>
(id: string) => <Link to="/docs/api/nodes/node-options/#typescript">Node</Link> | undefined
</>} />

### `setNodes`

<PropItem description="Set nodes array, for controlled flow onNodesChange is required" type={<>
(nodes: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[] | (nodes: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) => <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) => void
</>} />

### `addNodes`

<PropItem description="Add one or multiple nodes" type={<>
(nodes: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link> | <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]): void
</>} />

### `getEdges`

<PropItem description="Return array of edges" type={<>
() => <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]
</>} />

### `getEdge`

<PropItem description="Return a edge by id" type={<>
(id: string) => <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link> | undefined
</>} />

### `setEdges`

<PropItem description="Set edges array, for controlled flow onEdgesChange is required" type={<>
(edges: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[] | (edges: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]) => <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[])=> void
</>} />

### `addEdges`

<PropItem description="Add one or multiple edges" type={<>
(edges: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link> | <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]) => void
</>} />

### `toObject`

<PropItem description="Return nodes, edges and viewport" type={<>
() => <Link to="/docs/api/types/#reactflowjsonobject">ReactFlowJsonObject</Link>
</>} />

## Viewport

### `fitBounds`

<PropItem description={<>Fits the pane to the passed bounds (object with width x, y, width and height: <code>&#123; x: 0, y: 0, width: 100, height: 100 &#125;</code>)</>} type={<>
(bounds: <Link to="/docs/api/types/#rect">Rect</Link>, options?: <Link to="/docs/api/types/#fitboundsoptions">FitBoundsOptions</Link>) => void
</>} />

### `fitView`

<PropItem description="Fit the view to the nodes on the pane. `padding` is `0.1` and `includeHiddenNodes` is `false` by default" type={<>
(options?: <Link to="/docs/api/types/#fitviewsoptions">FitViewOptions</Link>) => void
</>} />

### `zoomIn`

<PropItem description="Zoom in" type={<>
(options?: <Link to="/docs/api/types/#viewporthelperfunctionoptions">ViewportHelperFunctionOptions</Link>) => void
</>} />

### `zoomOut`

<PropItem description="Zoom out" type={<>
(options?: <Link to="/docs/api/types/#viewporthelperfunctionoptions">ViewportHelperFunctionOptions</Link>) => void
</>} />

### `zoomTo`

<PropItem description="Zoom to passed zoom level" type={<>
(zoomLevel: number, options?: <Link to="/docs/api/types/#viewporthelperfunctionoptions">ViewportHelperFunctionOptions</Link>) => void
</>} />

### `getZoom`

<PropItem description="Return the current zoom level" type={<>
() => number
</>} />

### `setViewport`

<PropItem description="Set the viewport of the pane" type={<>
(viewport: <Link to="/docs/api/types/#viewport">Viewport</Link>, options?: <Link to="/docs/api/types/#viewporthelperfunctionoptions">ViewportHelperFunctionOptions</Link>) => void
</>} />

### `getViewport`

<PropItem description="Return current viewport" type={<>
() => <Link to="/docs/api/types/#viewport">Viewport</Link>
</>} />

### `setCenter`

<PropItem description="Set the center to the passed params. If no zoom is passed, maxZoom is used" type={<>
(x: number, y: number, options?: <Link to="/docs/api/types/#setcenteroptions">SetCenterOptions</Link>) => void
</>} />

### `project`

<PropItem description="Transforms pixel coordinates to the internal ReactFlow coordinate system. This can be used when you drag nodes (from a side bar for example) and need the internal position on the pane." type={<>
(xy: <Link to="/docs/api/types/#xyposition">XYPosition</Link>) => <Link to="/docs/api/types/#xyposition">XYPosition</Link>
</>} />

### `viewportInitialized`

<PropItem description="Boolean property to determine if React Flow has been initialized with all its event listeners" type="boolean" />
