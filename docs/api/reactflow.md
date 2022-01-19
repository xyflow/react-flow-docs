---
title: ReactFlow Props
sidebar_position: 1
---

This is the list of prop types you can pass to the main `ReactFlow` component.

```jsx
import ReactFlow from 'react-flow-renderer';
```

### Basic Props

- `elements`: array of [nodes](/docs/api/nodes/) and [edges](/docs/api/edges/) _(required)_
- `style`: css properties
- `className`: additional class name

### Flow View

- `minZoom`: default: `0.5`
- `maxZoom`: default: `2`
- `defaultZoom`: default: `1`
- `defaultPosition`: default: `[0, 0]`
- `snapToGrid`: default: `false`
- `snapGrid`: [x, y] array - default: `[15, 15]`
- `onlyRenderVisibleElements`: default: `false`
- `translateExtent`: [default `[[-∞, -∞], [+∞, +∞]]`](https://github.com/d3/d3-zoom#zoom_translateExtent)
- `nodeExtent`: default `[[-∞, -∞], [+∞, +∞]]` defines the extent for the node positions
- `preventScrolling`: default `true` if true default browser scroll behaviour is prevented

### Event Handlers

- `onElementClick(event, element)`: called when user clicks node or edge
- `onElementsRemove(elements)`: called when user removes node or edge
- `onNodeDragStart(event, node)`: node drag start
- `onNodeDrag(event, node)`: node drag
- `onNodeDragStop(event, node)`: node drag stop
- `onNodeMouseEnter(event, node)`: node mouse enter
- `onNodeMouseMove(event, node)`: node mouse move
- `onNodeMouseLeave(event, node)`: node mouse leave
- `onNodeContextMenu(event, node)`: node context menu
- `onNodeDoubleClick(event, node)`: node double click
- `onConnect({ source, target })`: called when user connects two nodes
- `onConnectStart(event, { nodeId, handleType })`: called when user starts to drag connection line
- `onConnectStop(event)`: called when user stops to drag connection line
- `onConnectEnd(event)`: called after user stops or connects nodes
- `onEdgeUpdate(oldEdge, newConnection)`: called when the end of an edge gets dragged to another source or target
- `onEdgeMouseEnter(event, edge)`: edge mouse enter
- `onEdgeMouseMove(event, edge)`: edge mouse move
- `onEdgeMouseLeave(event, edge)`: edge mouse leave
- `onEdgeContextMenu(event, edge)`: called when user does a right-click on an edge
- `onEdgeUpdateStart(event, edge)`: called when user starts to update an edge
- `onEdgeUpdateEnd(event, edge)`: called when user ends an edge update (for TS users: this is a normal `MouseEvent` and not a `React.MouseEvent` like the other ones).
- `onLoad(reactFlowInstance)`: called after flow is initialized
- `onMove(flowTransform)`: called when user is panning or zooming
- `onMoveStart(flowTransform)`: called when user starts panning or zooming
- `onMoveEnd(flowTransform)`: called when user ends panning or zooming
- `onSelectionChange(elements)`: called when user selects one or multiple elements
- `onSelectionDragStart(event, nodes)`: called when user starts to drag a selection
- `onSelectionDrag(event, nodes)`: called when user drags a selection
- `onSelectionDragStop(event, nodes)`: called when user stops to drag a selection
- `onSelectionContextMenu(event, nodes)`: called when user does a right-click on a selection
- `onPaneClick(event)`: called when user clicks directly on the canvas
- `onPaneContextMenu(event)`: called when user does a right-click on the canvas
- `onPaneScroll(event)`: called when user scrolls pane (only works when `zoomOnScroll` is set to `false)

### Interaction

- `nodesDraggable`: default: `true`. This applies to all nodes. You can also change the behavior of a specific node with the `draggable` node option. If this option is set to `false` and you have **clickable elements** inside your node, you need to set `pointer-events:all` explicitly for these elements
- `nodesConnectable`: default: `true`. This applies to all nodes. You can also change the behavior of a specific node with the `connectable` node option
- `elementsSelectable`: default: `true`. This applies to all elements. You can also change the behavior of a specific node with the `selectable` node option. If this option is set to `false` and you have **clickable elements** inside your node, you need to set `pointer-events:all` explicitly for these elements
- `zoomOnScroll`: default: `true`. Zoom the graph in and out using the mousewheel or trackpad
- `zoomOnPinch`: default: `true`. Zoom the graph in and out using pinch
- `panOnScroll`: default: `false`. Move the graph while keeping the zoomlevel using mousewheel or trackpad. Overwrites `zoomOnScroll`
- `panOnScrollSpeed`: default: `0.5`. Controls how fast the canvas is moved while using the mousewheel. Only has an effect if `panOnScroll` is enabled
- `panOnScrollMode`: default: `'free'`. Possible values are `'free'` (all directions), `'vertical'` (only vertical) or `'horizontal'` (only horizontal)
- `zoomOnDoubleClick`: default: `true`
- `selectNodesOnDrag`: default: `true`
- `paneMoveable`: default: `true` - If set to `false`, panning is disabled
- `connectionMode`: default: `'strict'`. Possible values are `'strict'` (only source to target connections are possible) or `'loose'` (source to source and target to target connections are allowed)

### Element Customization

- `nodeTypes`: object with [node types](/docs/api/node-types/)
- `edgeTypes`: object with [edge types](/docs/api/edge-types/)
- `nodeTypesId`: if you need to update your nodeTypes, you can pass a unique id here (we will remove this hack in the v10 release)
- `edgeTypesId`: if you need to update your edgeTypes, you can pass a unique id here (we will remove this hack in the v10 release)
- `arrowHeadColor`: default: `#b1b1b7`
- `markerEndId`: Gets used as the marker-end attribute of the edges

### Connection Line Options

- `connectionLineType`: connection line type = `default` (bezier), `straight`, `step`, `smoothstep`
- `connectionLineStyle`: connection style as svg attributes
- `connectionLineComponent`: [custom connection line component](/examples/custom-connectionline/)

### Keys

- `deleteKeyCode`: `number` | `string` default: `Backspace`
- `selectionKeyCode`: `number` | `string` default: `Shift` - While pressing the selectionKeyCode and dragging the mouse you can create a selection for multiple nodes and edges
- `multiSelectionKeyCode`: `number` | `string` default `Meta` - While pressing the multiSelectionKeyCode you can select multiple nodes and edges with a click
- `zoomActivationKeyCode`: `number` | `string` default `Meta` - While pressing the zoomActivationKeyCode you can zoom even if `panOnScroll=true` or `zoomOnScroll=false`

**Typescript:** The interface of the ReactFlow Prop Types are exported as `ReactFlowProps`. You can use it in your code as follows:

```javascript
import { ReactFlowProps } from 'react-flow-renderer';
```
