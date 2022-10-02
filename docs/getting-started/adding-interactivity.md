---
title: Adding Interactivity
description: Here's how to install the React Flow package using npm (as reactflow), and how to include it in your own project
sidebar_position: 3
---

import CodeViewer from '/src/components/CodeViewer';
const editorOptions = { editorHeight: 400, editorWidthPercentage: 45, wrapContent: true }

Let's make it so we can select, drag, and remove nodes and edges.

:::info

In this Getting Started tutorial, we are going to use a ["controlled component"](https://reactjs.org/docs/forms.html#controlled-components), which is typically the best and most flexible way to use React Flow in your own applications. You can also use React Flow in an [uncontrolled way](/docs/guides/uncontrolled-flow/).

:::

## Handle Change Events

First let's import a few things. To manage the changes in React Flow, we'll be using `useState` and the two helper function `applyEdgeChanges` and `applyNodeChanges` from React Flow.

```js
import { useState, useCallback } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from 'reactflow';
```

We're going to set up states for both the nodes and edges:

```js
const [nodes, setNodes] = useState(initialNodes);
const [edges, setEdges] = useState(initialEdges);
```

Directly beneath that, we'll add these two functions:

```js
const onNodesChange = useCallback((changes) => setNodes(applyNodeChanges(changes, nodes)), [setNodes]);
const onEdgesChange = useCallback((changes) => setEdges(applyEdgeChanges(changes, edges)), [setEdges]);
```

When you drag or select a node, the `onNodeChange` handler gets called. With help of the `applyNodeChanges` function you can then apply those changes to your current node state. Putting evetything together, it should look like this:

<CodeViewer codePath="api-flows/MakeItInteractive1" applyStyles={false} options={editorOptions} />

Now if you run your application, you'll be able to click and drag the components, and the UI will update based on those movements.

## Handle Connections

One last piece is missing: connecting nodes manually. For this we need to implement an `onConnect` handler and pass it to the `<ReactFlow />` component as well:

<CodeViewer codePath="api-flows/MakeItInteractive2" applyStyles={false} options={editorOptions} />

Try to connect the two nodes by dragging from on handle to another one. That's it. You've built a fully interactive flow.

That's it for now :) You made it! If you want to move on, we recommend to check out the ["Custom Nodes" guide](/docs/guides/custom-nodes/).
