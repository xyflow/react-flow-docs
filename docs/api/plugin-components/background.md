---
title: <Background />
sidebar_position: 1
---

The Background component comes with three background variants: **dots**, **lines** and **cross**. You can use it by passing it as a children to the `ReactFlow` component.

### Usage

```jsx
import ReactFlow, { Background } from 'reactflow';

function FlowWithBackground() {
  return (
    <ReactFlow nodes={[]} edges={[]}>
      <Background variant="dots" gap={12} size={4} />
    </ReactFlow>
  );
}
```

### Prop Types

| Name        | Type                             | Default                             | Description                                                                                    |
| ----------- | -------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| `variant`   | `'lines'`, `'dots'` or `'cross'` | `'dots'`                            | Background pattern type                                                                        |
| `gap`       | `number` or  `[number, number]`  | `25`                                | Gap between the patterns. You can pass an array with two numbers to specify an x- and a y-gap. |
| `size`      | `number`                         | `1` for `'dots'`, `6` for `'cross'` | Radius of the `'dots'` or dimension of a `'cross'`                                             |
| `lineWidth` | `number`                         | `1`                                 | Line width for `'lines'` or `'cross'`                                                          |
| `color`     | `string`                         | `#81818a`                           | Pattern color                                                                                  |
| `style`     | `CSSProperties`                  | `undefined`                         | Background style attributes                                                                    |
| `className` | `string`                         | `undefined`                         | Additional class name                                                                          |

**Typescript:** The interface of the Background Prop Types are exported as `BackgroundProps`.

### Npm Package

The background component is published under `@reactflow/background` and can also be [installed and used separately](docs/getting-started/installation/#reactflowbackground).
