---
title: <Background />
sidebar_position: 1
---

React Flow comes with two background variants: **dots** and **lines**. You can use it by passing it as a children to the `ReactFlow` component:

### Usage

```jsx
import ReactFlow, { Background } from 'react-flow-renderer';

function FlowWithBackground() {
  return (
    <ReactFlow nodes={[]} edges={[]}>
      <Background variant="dots" gap={12} size={4} />
    </ReactFlow>
  );
}
```

### Prop Types

| Name        | Type              | Default     | Description                                         |
| ----------- | ----------------- | ----------- | --------------------------------------------------- |
| `variant`   | `'lines', 'dots'` | `'dots'`    | Background pattern type                             |
| `gap`       | `number`          | `16`        | Gap between the patterns                            |
| `size`      | `number`          | `0.5`       | Radius of the dots or the stroke width of the lines |
| `color`     | `string`          | `#81818a`   | Pattern color                                       |
| `style`     | `CSSProperties`   | `undefined` | Background style attributes                         |
| `className` | `string`          | `undefined` | Additional class name                               |

**Typescript:** The interface of the Background Prop Types are exported as `BackgroundProps`.
