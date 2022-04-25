---
title: <MiniMap />
sidebar_position: 3
---

You can use the `MiniMap` component by passing it as a children to the `ReactFlow` component:

### Usage

```jsx
import ReactFlow, { MiniMap } from 'react-flow-renderer';

const nodeColor = (node) => {
  switch (node.type) {
    case 'input':
      return 'red';
    case 'default':
      return '#00ff00';
    case 'output':
      return 'rgb(0,0,255)';
    default:
      return '#eee';
  }
};

function FlowWithMiniMap() {
  return (
    <ReactFlow defaultNodes={[]}>
      <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} />
    </ReactFlow>
  );
}
```

### Prop Types

| Name               | Type                   | Default                   | Description                                                                                                                      |
| ------------------ | ---------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `nodeColor`        | `string` or `function` | `#fff`                    | If you pass a color string, all nodes get that color. If you pass a function you can return a color depending on the passed node |
| `nodeBorderRadius` | `number`               | `5`                       | Node border radius                                                                                                               |
| `nodeStrokeWidth`  | `number`               | `2`                       | Node stroke width                                                                                                                |
| `nodeClassName`    | `string` or `function` | `''`                      | Node class name                                                                                                                  |
| `maskColor`        | `string` or `function` | `rgb(240, 242, 243, 0.7)` | Mini map mask color                                                                                                              |
| `style`            | `CSSProperties`        | `undefined`               | Mini map style attributes                                                                                                        |
| `className`        | `string`               | `undefined`               | Additional class name                                                                                                            |

**Typescript:** The interface of the MiniMap Prop Types are exported as `MiniMapProps`.
