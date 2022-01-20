---
title: Getting Started
---

Before you can start to use React Flow you need to install `react-flow-renderer`:

## Installation

**npm:**

```bash
npm install react-flow-renderer
```

**yarn:**

```bash
yarn add react-flow-renderer
```

## Usage

This is a basic example of how you can use React Flow. A flow consists of nodes and edges (or just nodes). You can pass arrays of nodes and edges as props to the ReactFlow component. Hereby all node and edge ids need to be unique. A node needs a position and a label and an edge needs a source (node id) and a target (node id). This is the most basic setup for a flow:

import ExampleViewer from '../examples/ExampleViewer';

<ExampleViewer example="IntroductionFlow" />

:::caution

The dimensions of your React Flow component depend on the parents dimensions.

:::

## Basic Functionality

We don’t do any state updates besides the positions. This means that you need to pass the functions to remove an element or connect nodes by yourself. You can implement your own ones or use the [helper functions](/docs/api/helper-functions/) that come with the library. Here you see an example of how to use the helper functions `removeElements` and `addEdge`.

```jsx
import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    data: { label: 'Another Node' },
    position: { x: 100, y: 125 },
  },
];

export default () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div style={{ height: 300 }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        deleteKeyCode={46} /* 'delete'-key */
      />
    </div>
  );
};
```

In this example you can connect nodes and remove selected nodes and edges with the backspace key.

You can find more advanced examples in the [examples](/examples/) section.
