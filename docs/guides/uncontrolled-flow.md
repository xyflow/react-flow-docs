---
title: Uncontrolled Flow
sidebar_position: 3
---

There are two ways to use React Flow - controlled or uncontrolled. Controlled means, that you are in control of the state of the nodes and edges. In an uncontrolled flow the state of the nodes and edges is handled by React Flow. In this part we will show you how to work with an uncontrolled flow.

An implementation of an uncontrolled flow is simpler, because you don't need to pass any handlers:

import CodeViewer from '/src/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/Uncontrolled" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js', 'edges.js']} />

As you can see we are passing `defaultEdgeOptions` to define that all edges are animated. This is helpful, because you can't use the `onConnect` handler anymore to pass custom options to a newly created edge. Try to connect the Node B with Node C and see that the new edge is animated.

## Updating Nodes and Edges

Since you don't have the nodes and edges in your local state, you can't update them by altering the `nodes` or `edges` array. In order to do so, you need to use the [React Flow instance](/docs/api/react-flow-instance) that comes with a lot of utility functions for altering the internal state. You can receive the instance via the `onReady` callback or better by using the [`useReactFlow` hook](/docs/api/hooks/use-react-flow-hook). Let's create a button that adds a new node on a random position. For this, we are wrapping our flow with the [`ReactFlowProvider`](/docs/api/react-flow-provider) and use the [`addNodes` function](/docs/api/react-flow-instance#nodes-and-edges).

:::info

The `Flow` component in this example is wrapped with the `ReactFlowProvider` to use the `useReactFlow` hook.

:::

<CodeViewer codePath="api-flows/Uncontrolled2" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js', 'edges.js', 'button.css']} />
