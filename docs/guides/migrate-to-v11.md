---
title: Migrate to v11
sidebar_position: 9
---

A lot changed in v11 but this time we've tried to keep the breaking changes small. The biggest change is the new package name `reactflow` and the new repo structure. React Flow is now managed as a monorepo and separated into multiple pacakges that can also be installed separately. In addition to that, there are some API changes and new APIs introduced in v11. This guide explains the changes in detail and helps you to migrate from v10 to v11.

:::caution

React Flow 11 only works with **React 17** or greater

:::

## New Features

- **Better [Accessibility](/docs/guides/accessibility)**
  - Nodes and edges are focusable, selectable, moveable and deleteable with the keyboard.
  - `aria-` default attributes for all elements and controllable via `ariaLabel` options
  - Keyboard controls can be disabled with the new `disableKeyboardA11y` prop
- **Better selectable edges** via new edge option: `interactionWidth` - renders invisible edge that makes it easier to interact
- **Better routing for smoothstep and step edges**: https://twitter.com/reactflowdev/status/1567535405284614145
- **Nicer edge updating behaviour**: https://twitter.com/reactflowdev/status/1564966917517021184
- **Node origin**: The new `nodeOrigin` prop lets you control the origin of a node. Useful for layouting.
- **New background pattern**: `BackgroundVariant.Cross` variant
- **[`useOnViewportChange`](/docs/api/hooks/use-on-viewport-change) hook** - handle viewport changes within a component
- **[`useOnSelectionChange`](/docs/api/hooks/use-on-selection-change) hook** - handle selection changes within a component
- **[`useNodesInitialized`](/docs/api/hooks/use-nodes-initialized) hook** - returns true if all nodes are initialized and if there is more than one node
- **Deletable option** for Nodes and edges
- **New Event handlers**: `onPaneMouseEnter`, `onPaneMouseMove` and `onPaneMouseLeave`
- **Edge `pathOptions`** for `smoothstep` and `default` edges
- **Nicer cursor defaults**: Cursor is grabbing, while dragging a node or panning
- **Pane moveable** with middle mouse button
- **Pan over nodes** when they are not draggable (`draggable=false` or `nodesDraggable` false)
- **[`<BaseEdge />`](/docs/api/edges/base-edge) component** that makes it easier to build custom edges
- **[Separately installable packages](/docs/getting-started/installation/#using-packages)**
  - @reactflow/core
  - @reactflow/background
  - @reactflow/controls
  - @reactflow/minimap

## Breaking Changes

### 1. New npm package name

The package `react-flow-renderer` has been renamed to `reactflow`.

#### Old API

```js
// npm install react-flow-renderer
import ReactFlow from 'react-flow-renderer';
```

#### New API

```js
// npm install reactflow
import ReactFlow from 'reactflow';
```

### 2. Importing CSS is mandatory

We are not injecting CSS anymore. **React Flow won't work if you are not loading the styles!**

```js
// default styling
import 'reactflow/dist/style.css';

// or if you just want basic styles
import 'reactflow/dist/base.css';
```

#### 2.1. Removal of the nocss entrypoint

This change also means that there is no `react-flow-renderer/nocss` entry point anymore. If you used that, you need to adjust the CSS entry points as mentioned above.

### 3. `defaultPosition` and `defaultZoom` have been merged to `defaultViewport`

#### Old API

```jsx
import ReactFlow from 'react-flow-renderer';

const Flow = () => {
  return <ReactFlow defaultPosition={[10, 15]} defaultZoom={5} />;
};

export default Flow;
```

#### New API

```jsx
import ReactFlow from 'reactflow';

const defaultViewport: Viewport = { x: 10, y: 15, zoom: 5 };

const Flow = () => {
  return <ReactFlow defaultViewport={defaultViewport} />;
};

export default Flow;
```

### 4. Removal of `onClickConnectStop` and `onConnectStop`

#### Old API

```jsx
import ReactFlow from 'react-flow-renderer';

const Flow = () => {
  const onConnectStop = () => console.log('on connect stop');

  return (
    <ReactFlow
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      onConnectStop={onConnectStop}
      onClickConnectStop={onConnectStop}
    />
  );
};

export default Flow;
```

#### New API

```jsx
import ReactFlow from 'reactflow';

const Flow = () => {
  const onConnectEnd = () => console.log('on connect stop');

  return (
    <ReactFlow
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      onConnectEnd={onConnectEnd}
      onClickConnectEnd={onConnectEnd}
    />
  );
};

export default Flow;
```
