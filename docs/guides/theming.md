---
title: Theming
sidebar_position: 6
---

React Flow offers two bundles. One imports styles automatically and the other doesn't.

### Import Bundle with Styles

```js
import ReactFlow from 'react-flow-renderer';

// no need to import styles
```

### Import Bundle without Styles

```js
import ReactFlow from 'react-flow-renderer/nocss';

// you need these styles for React Flow to work properly
import 'react-flow-renderer/dist/style.css';

// additionally you can load the default theme
import 'react-flow-renderer/dist/theme-default.css';
```

## Overwrite Default Styles

When you are using the default styles there are two ways to style the flow pane and the nodes and edges.
You can create your own CSS rules or pass style properties to the components.

### Using Class Names

Since we are rendering DOM nodes you can simply overwrite the styles with your own CSS rules.
The React Flow wrapper has the className `react-flow`. If you want to change the background for example you can do:

```css
.react-flow {
  background: red;
}
```

### Using Style Prop

Since we are rendering DOM nodes you can simply overwrite the styles with your own CSS rules.
The React Flow wrapper has the className `react-flow`. If you want to change the background for example you can do:

```jsx
const reactFlowStyle = {
  background: 'red',
  width: '100%',
  height: 300,
};
...
<ReactFlow style={reactFlowStyle} />;
```

## React Flow Class Names

The following class names are used for the different elements that could occur inside a flow:

- `.react-flow` - Outer container
- `.react-flow__renderer` - Inner container
- `.react-flow__zoompane` - Zoom & pan pane
- `.react-flow__selectionpane` - Selection pane
- `.react-flow__selection` - User selection
- `.react-flow__edges` - Edges wrapper
- `.react-flow__edge` - Edge element
  - `.selected` is added when edge is selected
  - `.animated` is added when edge is animated
- `.react-flow__edge-path` - Edge element path
- `.react-flow__edge-text` - Edge text
- `.react-flow__edge-textbg` - Edge text background
- `.react-flow__connection` - Connection line
- `.react-flow__connection-path` - Connection line path
- `.react-flow__nodes` - Nodes wrapper
- `.react-flow__node` - Node element
  - `.selected` is added when edge is selected
  - `-${type}` is added (`.react-flow__node-default`, `.react-flow__node-input`, `.react-flow__node-output`)
- `.react-flow__nodesselection` - Nodes selection
- `.react-flow__nodesselection-rect ` - Nodes selection rect
- `.react-flow__handle` - Handle component
  - `.react-flow__handle-bottom` is added when position = 'bottom'
  - `.react-flow__handle-top` is added when position = 'top'
  - `.react-flow__handle-left` is added when position = 'left'
  - `.react-flow__handle-right` is added when position = 'right'
  - `.react-flow__handle-connecting` is added when connection line is above a handle
  - `.react-flow__handle-valid` is added when connection line is above a handle and the connection is valid
- `.react-flow__background` - Background component
- `.react-flow__minimap` - Mini map component
- `.react-flow__controls` - Controls component
