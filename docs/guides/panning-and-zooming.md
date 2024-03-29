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

## Default Viewport Controls

As mentioned above, the default controls are:

- pan: drag mouse
- zoom: scroll
- create selection: Shift + drag

import CodeViewer from '/src/components/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer
codePath="api-flows/ZoomPan"
additionalFiles={['nodes.js', 'edges.js']}
editorOptions={editorOptions}
/>

## Figma-like Viewport Controls

If you prefer figma/sketch/design tool controls you can set `panOnScroll={true}` and `selectionOnDrag={true}`:

- pan: Space + drag mouse, scroll, middle or right mouse
- zoom: pitch or cmd + scroll
- create selection: drag mouse

<CodeViewer
codePath="api-flows/ZoomPan2"
additionalFiles={['nodes.js', 'edges.js']}
editorOptions={editorOptions}
/>

In this example we also set `selectionMode={SelectionMode.Partial}` to be able to add nodes to a selection that are only partially selected.
