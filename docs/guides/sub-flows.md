---
title: Sub Flows
sidebar_position: 2
---

A subflow is a flow inside a node. It can be a separate flow or a flow that is connected with other nodes outside of its parent. This feature can also be used for grouping nodes. In this part of the docs we are going to build a flow with sub flows and show you the child node specific options.

:::caution Order of Nodes
It's important that your parent nodes appear before their children in the `nodes`/ `defaultNodes` array to get processed correctly.
:::

### Adding Child Nodes

If you want to add a node to another node you need to use the `parentNode` option (you can find a list of all options in the [node options section](/docs/api/nodes/node-options)). In this example we are passing width and height via the style option and also set the child extent to `'parent'` so that we can't move them out of the parent node. Child nodes are positioned relative to its parent. A postion of `{ x: 0, y: 0 }` is the top left corner in the parent.

import CodeViewer from '/src/components/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/SubFlows" applyStyles={false} options={editorOptions} activeFile="nodes.js" additionalFiles={['nodes.js','edges.js']} />

### Using Child Specific Options

When you move the parent node you can see that the child nodes move too. Adding nodes to another node with the `parentNode` option just does one things: It positions it relatively to its parent. The children is not really a child markup-wise. You can drag or position the child outside of its parent (when the `extent: 'parent'` option is not set) but when you move the parent, the child moves with it.
In the example above we are using the `group` type for the parent node but you can use any type you want. Now we are going to some more nodes and edges:

<CodeViewer codePath="api-flows/SubFlows2" applyStyles={false} options={editorOptions} activeFile="nodes.js" additionalFiles={['nodes.js','edges.js']} />

### Using a Normal Node Type as a Parent

Let's remove the label of node B and add some child nodes. In this example you can see that you can use non-group nodes as parent nodes as well. We also set the child nodes to `draggable: false` so that you can't move them.

<CodeViewer codePath="api-flows/SubFlows3" applyStyles={false} options={editorOptions} activeFile="nodes.js" additionalFiles={['nodes.js','edges.js']} />
