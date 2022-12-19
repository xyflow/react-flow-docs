---
title: Panning and Zooming
sidebar_position: 4
---

The default pan and zoom behaviour of React Flow is inspired by [slippy maps](https://wiki.openstreetmap.org/wiki/Slippy_map). You pan by dragging and zoom by scrolling. You can customize this behaviour easily with the provided props:

- `panOnDrag`: default: `true`
- `selectionOnDrag`: default: `false` (available since 11.4.0)
- `panOnScroll`: default: `false` (Overwrites `zoomOnScroll`)
- `panOnScrollSpeed`: default: `0.5`
- `panOnScrollMode`: default: `'free'`. `'free'` (all directions), `'vertical'` (only vertical) or `'horizontal'` (only horizontal)
- `zoomOnScroll`: default: `true`
- `zoomOnPinch`: default: `true`
- `zoomOnDoubleClick`: default: `true`
- `preventScrolling`: default: `true` (browser scroll behaviour is prevented)
- `zoomActivationKeyCode`: default `'Meta'`
- `panActivationKeyCode`: default `'Space'` (available since 11.4.0)

If you prefer figma/sketch/design tool controls (panning = scrolling, trackpad or press space and drag, zooming = cmd and scrolling or pinch on trackpad) you can set `panOnScroll={true}` and `selectionOnDrag={true}`:

```jsx
import ReactFlow from 'reactflow';

function Flow() {
  return <ReactFlow panOnScroll selectionOnDrag nodes={[]} edges={[]} />;
}
```
