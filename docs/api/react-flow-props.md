---
title: ReactFlow Props
sidebar_position: 1
---

This is the list of prop types you can pass to the `<ReactFlow />` component.

```jsx
import ReactFlow from 'react-flow-renderer';
```

:::info Typescript

The interface of the ReactFlow Prop types is exported as `ReactFlowProps`. You can use it in your code as follows:

```javascript
import { ReactFlowProps } from 'react-flow-renderer';
```

:::

### Basic Props

| Name                         | Type            | Default                                                                                       | Description                                                                |
| ---------------------------- | --------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `defaultNodes`               | `Node[]`        | `[]`                                                                                          |  array of [nodes](/docs/api/nodes/node-options) (for an uncontrolled flow) |
| `defaultEdges`               | `Edge[]`        | `[]`                                                                                          |  array of [edges](/docs/api/edges/edge-options) (for an uncontrolled flow) |
| `nodes`                      | `Node[]`        | `[]`                                                                                          |  array of [nodes](/docs/api/nodes/node-options) (for an controlled flow)   |
| `edges`                      | `Edge[]`        | `[]`                                                                                          |  array of [edges](/docs/api/edges/edge-options) (for an controlled flow)   |
| `onNodesChange(nodeChanges)` | `function`      | `undefined`                                                                                   |  handler for adding interactivity for a controlled flow                    |
| `onEdgesChange(edgeChanges)` | `function`      | `undefined`                                                                                   |  handler for adding interactivity for a controlled flow                    |
| `nodeTypes`                  | `object`        | `{input: InputNode,default: DefaultNode,output: OutputNodegroup: GroupNode}`                  |  object with [node types](/docs/api/nodes/node-types/)                     |
| `edgeTypes`                  | `object`        | `{ default: BezierEdge, straight: StraightEdge, step: StepEdge, smoothstep: SmoothStepEdge }` |  object with [edge types](/docs/api/edges/edge-types/)                     |
| `defaultMarkerColor`         | `string`        | `#b1b1b7`                                                                                     |  default marker color                                                      |
| `style`                      | `CSSProperties` | `undefined`                                                                                   |  css properties                                                            |
| `className`                  | `string`        | `undefined`                                                                                   |  additional class name                                                     |

### Flow View

| Name                        | Type                                                            | Default                | Description                                                                                        |
| --------------------------- | --------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- |
| `fitView`                   | `boolean`                                                       | `false`                | fits the view once to make all nodes visible                                                       |
| `fitViewOptions`            | `FitViewOptions`                                                | `undefined`            | options that are passed to the initial fitView                                                     |
| `minZoom`                   | `number`                                                        | `0.5`                  | min zoom level                                                                                     |
| `maxZoom`                   | `number`                                                        | `2`                    | max zoom level                                                                                     |
| `defaultZoom`               | `number`                                                        | `1`                    | default zoom level                                                                                 |
| `defaultPosition`           | `number[]`                                                      | `[0, 0]`               | default viewport position                                                                          |
| `snapGrid`                  | `number[]`                                                      | `[15, 15]`             | snap grid gap                                                                                      |
| `snapToGrid`                | `boolean`                                                       | `false`                | snap grid enabled                                                                                  |
| `onlyRenderVisibleElements` | `boolean`                                                       | `false`                | if true only nodes and edges inside the viewport get rendered                                      |
| `translateExtent`           | `number[number[], number[]]`                                    | `[[-∞, -∞], [+∞, +∞]]` | passed to the [d3-zoom translateExtent option](https://github.com/d3/d3-zoom#zoom_translateExtent) |
| `nodeExtent`                | `number[number[], number[]]`                                    | `[[-∞, -∞], [+∞, +∞]]` | defines the extent for the node positions                                                          |
| `preventScrolling`          | `boolean`                                                       | `true`                 | if true default browser scroll behaviour is prevented                                              |
| `attributionPosition`       | `'top-left'`, `'top-center'`, `'top-right'` or `'bottom-right'` | `'bottom-right'`       | position of the "React Flow" attribution                                                           |

### Event Handlers

#### General

| Name                        | Type       | Default     | Description                                 |
| --------------------------- | ---------- | ----------- | ------------------------------------------- |
| `onInit(reactFlowInstance)` | `function` | `undefined` | called as soon as React Flow is initialized |

#### Nodes

| Name                             | Type       | Default     | Description                    |
| -------------------------------- | ---------- | ----------- | ------------------------------ |
| `onNodeClick(event, node)`       | `function` | `undefined` | called when user clicks a node |
| `onNodeDragStart(event, node)`   | `function` | `undefined` | node drag start                |
| `onNodeDrag(event, node)`        | `function` | `undefined` | node drag                      |
| `onNodeDragStop(event, node)`    | `function` | `undefined` | node drag stop                 |
| `onNodeMouseEnter(event, node)`  | `function` | `undefined` | node mouse enter               |
| `onNodeMouseMove(event, node)`   | `function` | `undefined` | node mouse move                |
| `onNodeMouseLeave(event, node)`  | `function` | `undefined` | node mouse leave               |
| `onNodeContextMenu(event, node)` | `function` | `undefined` | node context menu              |
| `onNodeDoubleClick(event, node)` | `function` | `undefined` | node double click              |

#### Edges

| Name                                   | Type       | Default     | Description                                                                                                                          |
| -------------------------------------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `onEdgeClick(event, edge)`             | `function` | `undefined` | called when user clicks an edge                                                                                                      |
| `onEdgeMouseEnter(event, edge)`        | `function` | `undefined` | edge mouse enter                                                                                                                     |
| `onEdgeMouseMove(event, edge)`         | `function` | `undefined` | edge mouse move                                                                                                                      |
| `onEdgeMouseLeave(event, edge)`        | `function` | `undefined` | edge mouse leave                                                                                                                     |
| `onEdgeContextMenu(event, edge)`       | `function` | `undefined` | called when user does a right-click on an edge                                                                                       |
| `onEdgeUpdate(oldEdge, newConnection)` | `function` | `undefined` | called when the end of an edge gets dragged to another source or target                                                              |
| `onEdgeUpdateStart(event, edge)`       | `function` | `undefined` | called when user starts to update an edge                                                                                            |
| `onEdgeUpdateEnd(event, edge)`         | `function` | `undefined` | called when user ends an edge update (for TS users: this is a normal `MouseEvent` and not a `React.MouseEvent` like the other ones). |

#### Connections

| Name                                            | Type       | Default     | Description                                     |
| ----------------------------------------------- | ---------- | ----------- | ----------------------------------------------- |
| `onConnect({ source, target })`                 | `function` | `undefined` | called when user connects two nodes             |
| `onConnectStart(event, { nodeId, handleType })` | `function` | `undefined` | called when user starts to drag connection line |
| `onConnectStop(event)`                          | `function` | `undefined` | called when user stops to drag connection line  |
| `onConnectEnd(event)`                           | `function` | `undefined` | called after user stops or connects nodes       |

#### Pane

| Name                                   | Type       | Default     | Description                                                                     |
| -------------------------------------- | ---------- | ----------- | ------------------------------------------------------------------------------- |
| `onMove(flowTransform)`                | `function` | `undefined` | called when user is panning or zooming                                          |
| `onMoveStart(flowTransform)`           | `function` | `undefined` | called when user starts panning or zooming                                      |
| `onMoveEnd(flowTransform)`             | `function` | `undefined` | called when user ends panning or zooming                                        |
| `onSelectionChange(elements)`          | `function` | `undefined` | called when user selects one or multiple elements                               |
| `onSelectionDragStart(event, nodes)`   | `function` | `undefined` | called when user starts to drag a selection                                     |
| `onSelectionDrag(event, nodes)`        | `function` | `undefined` | called when user drags a selection                                              |
| `onSelectionDragStop(event, nodes)`    | `function` | `undefined` | called when user stops to drag a selection                                      |
| `onSelectionContextMenu(event, nodes)` | `function` | `undefined` | called when user does a right-click on a selection                              |
| `onPaneClick(event)`                   | `function` | `undefined` | called when user clicks directly on the canvas                                  |
| `onPaneContextMenu(event)`             | `function` | `undefined` | called when user does a right-click on the canvas                               |
| `onPaneScroll(event)`                  | `function` | `undefined` | called when user scrolls pane (only works when `zoomOnScroll` is set to `false) |

### Interaction

| Name                 | Type                                                 | Default     | Description                                                                                                                              |
| -------------------- | ---------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `nodesDraggable`     | `boolean`                                            | `true`      | This applies to all nodes. You can also change the behavior of a specific node with the `draggable` node option                          |
| `nodesConnectable`   | `boolean`                                            | `true`      | This applies to all nodes. You can also change the behavior of a specific node with the `connectable` node optionstart                   |
| `elementsSelectable` | `boolean`                                            | `true`      | This applies to all nodes and edges. You can also change the behavior of a specific node with the `selectable` node option. drag         |
| `panOnDrag`          | `boolean`                                            | `true`      | enables pan on drag                                                                                                                      |
| `panOnScroll`        | `boolean`                                            | `falswee`   | Move the graph while keeping the zoomlevel using mousewheel or trackpad. Overwrites `zoomOnScroll` enter                                 |
| `panOnScrollSpeed`   | `number`                                             | `undefined` | Controls how fast the canvas is moved while using the mousewheel. Only has an effect if `panOnScroll` is enabled                         |
| `panOnScrollMode`    |   `'free'`, `'vertical'`, `'horizontal'` or `'free'` | `'free'`    | Enables certain scroll directions                                                                                                        |
| `zoomOnScroll`       | `boolean`                                            | `true`      | Zoom the graph in and out using the mousewheel or trackpad                                                                               |
| `zoomOnPinch`        | `boolean`                                            | `true`      | Zoom the graph in and out using pinch                                                                                                    |
| `zoomOnDoubleClick`  | `boolean`                                            | `true`      | Enables zoom on double click                                                                                                             |
| `selectNodesOnDrag`  | `boolean`                                            | `true'`     | Enables to select nodes on drag                                                                                                          |
| `connectOnClick`     | `boolean`                                            | `true`      | Enables to create connections on touch devices and via mouse click                                                                       |
| `connectionMode`     | `'strict'` or `'loose'`                              | `'strict'`  | `'strict'` (only source to target connections are possible) or `'loose'` (source to source and target to target connections are allowed) |

### Connection Line Options

| Name                      | Type            | Default     | Description                                                               |
| ------------------------- | --------------- | ----------- | ------------------------------------------------------------------------- |
| `connectionLineType`      | `string`        | `undefined` | called when user clicks a node                                            |
| `connectionLineStyle`     | `CSSProperties` | `undefined` | connection style as svg attributes                                        |
| `connectionLineComponent` | `function`      | `undefined` | [custom connection line component](/docs/examples/custom-connectionline/) |

### Keys

| Name                    | Type                   | Default       | Description                                                                                                        |
| ----------------------- | ---------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------ |
| `deleteKeyCode`         | `string` or `string[]` | `'Backspace'` | When the user presses the deleteKeyCode an remove event gets triggered                                             |
| `selectionKeyCode`      | `string` or `string[]` | `'Shift'`     | While pressing the selectionKeyCode and dragging the mouse you can create a selection for multiple nodes and edges |
| `multiSelectionKeyCode` | `string` or `string[]` | `'Meta'`      | While pressing the multiSelectionKeyCode you can select multiple nodes and edges with a click                      |
| `zoomActivationKeyCode` | `string` or `string[]` | `'Meta'`      | While pressing the zoomActivationKeyCode you can zoom even if `panOnScroll=true` or `zoomOnScroll=false`           |

### Pro

| Name         | Type     | Default     | Description                                                                                             |
| ------------ | -------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `proOptions` | `object` | `undefined` | options to specify license and hide attribution (you can find more information on the [pro page](/pro)) |
