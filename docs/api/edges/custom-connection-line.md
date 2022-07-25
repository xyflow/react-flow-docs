---
title: Custom Connection Line
sidebar_position: 6
---

The connection line is the line that gets drawn while you connect two nodes with each other.
You can adjust the connection line by using the props documented in the [`connection line options` section](/docs/api/react-flow-props/#connection-line-options). If you want to implement a custom connection line, you can pass a React component to the `connectionLineComponent` prop. The connection line component will receive the following props:

### Connection Line Component Props

| Name                  | Type                 | Description                                |
| --------------------- | -------------------- | ------------------------------------------ |
| `fromX`               | `number`             | x position of the source handle            |
| `toY`                 | `number`             | y position of the source handle            |
| `fromPosition`        | `Position`           | position of the source handle              |
| `toX`                 | `number`             | x position of the target handle            |
| `toY`                 | `number`             | y position of the target handle            |
| `toPosition`          | `Position`           | position of the target handle              |
| `connectionLineType`  | `ConnectionLineType` | type                                       |
| `connectionLineStyle` | `CSS.Properties`     | style                                      |
| `fromNode`            | `Node`               | the node where the connection comes from   |
| `fromHandle`          | `HandleElement`      | the handle where the connection comes from |

You can find an implementation in the [custom connection line example](/docs/examples/edges/custom-connectionline/).
