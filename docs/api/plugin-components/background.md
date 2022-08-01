---
title: <Background />
sidebar_position: 1
---

The Background plugin comes with two background variants: **dots** and **lines**. You can use it by passing it as a children to the `ReactFlow` component.

### Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @react-flow/background
```

  </TabItem>
  <TabItem value="yarn" label="Yarn">

```bash
yarn add @react-flow/background
```

  </TabItem>
</Tabs>

### Usage

```jsx
import ReactFlow from '@react-flow/core';
import Background from '@react-flow/background';

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
