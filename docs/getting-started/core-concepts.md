---
title: Core Concepts
sidebar_position: 3
---

This is a basic example of how you can setup a flow. A flow consists of nodes and edges (or just nodes). You can pass arrays of `nodes` and `edges` as props to the ReactFlow component. Hereby all node and edge ids need to be unique. A node needs a position and a label and an edge needs a source (node id) and a target (node id). You can read more about the options in the [Node options](/docs/api/nodes#options) and [Edge options](/docs/api/edges#options) sections.

### Controlled or Uncontrolled

With React Flow you have two ways to setup a flow. You can either create a [controlled or an uncontrolled one](/docs/controlled-vs-uncontrolled).
We recommend to use a controlled one but for simpler use cases you can also setup an uncontrolled flow. **In the following part we will setup a controlled flow.** Let's start by adding some nodes and edges to the ReactFlow component:

import CodeViewer from '/src/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/IntroductionFlow" applyStyles={false} options={editorOptions} />

:::caution

The dimensions of your React Flow component depend on the parent dimensions. That means that the parent needs a width and height to render React Flow properly.

:::

## Basic Functionality

By default React Flow doesn't do any internal state updates besides handling the viewport when you setup a controlled flow. Like with an `<input />` component you need to pass handlers to apply the changes that are triggered by React Flow to your nodes and egdes. In order to **select**, **drag** and **remove** nodes and edges you need to implement an `onNodesChange` and an `onEdgesChange` handler:

<CodeViewer codePath="api-flows/IntroductionFlow2" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js', 'edges.js']} />

What is happening here? Whenever React Flow triggers a change (node drag, edge select, etc.), the `onNodesChange` handler gets called. We export an `applyNodeChanges` handler so that you don't need to handle the changes by yourself. The `applyNodeChanges` handler returns an updated array of nodes that is your new nodes state. You now have an interactive flow with the following kinds of interactions:

- selectable nodes and edges
- draggable nodes
- removable nodes and edges - press Backspace to remove a selected node or edge
- multi-selection area by pressing Shift
- multi-selection by pressing command

// @Todo: should we drop these hooks?  
For convience we export a helper hook that you can use to create the nodes and edges state more easily:

```js
const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
```

## Connecting Nodes

The last piece that is missing to get the full interactivity is the `onConnect` handler. You need to implement it, in order to handle new connections.

<CodeViewer codePath="api-flows/IntroductionFlow3" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js', 'edges.js']} />

In this example we are using the `addEdge` handler that returns an array of edges with the newly created one. If you want set a certain edge option whenever an edge gets created you can hook into the handler:

```js
const onConnect = useCallback(
  (connection) => setEdges((eds) => addEdge({ ...connection, animated: true }, eds)),
  [setEdges]
);
```

or use the `defaultEdgeOptions` prop:

```jsx
const defaultEdgeOptions = { animated: true };
...
<ReactFlow
  nodes={nodes}
  edges={edges}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  onConnect={onConnect}
  defaultEdgeOptions={defaultEdgeOptions}
/>;
```
