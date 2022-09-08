---
title: Panning and Zooming
sidebar_position: 4
---

The default pan and zoom behaviour of React Flow feels like a web map. You pan by dragging and zoom by scrolling. You can customize this behaviour easily with the provided props:

- `panOnDrag`: default: `true`
- `panOnScroll`: default: `false` (Overwrites `zoomOnScroll`)
- `panOnScrollSpeed`: default: `0.5`
- `panOnScrollMode`: default: `'free'`. `'free'` (all directions), `'vertical'` (only vertical) or `'horizontal'` (only horizontal)
- `zoomOnScroll`: default: `true`
- `zoomOnPinch`: default: `true`
- `zoomOnDoubleClick`: default: `true`

If you prefer figma/sketch/design tool controls (panning = press space + drag or trackpad, zooming = cmd + scrolling) you can set `panOnScroll={true}` and `panOnDrag={keyCondition}`. In this example we are using the [`useKeyPress` hook](/docs/api/hooks/use-key-press) from React Flow in order to be able to drag the pane when the space key is pressed:

```jsx
import ReactFlow, { useKeyPress } from 'reactflow';

function Flow() {
  const spacePressed = useKeyPress('Space');

  return <ReactFlow panOnScroll={true} panOnDrag={spacePressed} nodes={[]} edges={[]} />;
}
```
