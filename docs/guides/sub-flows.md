---
title: Sub Flows
sidebar_position: 2
---

A subflow is a flow inside a node. It can be a separate flow or a flow that is connected with other nodes outside of its parent. This feature can also be used for grouping nodes. In this part of the docs we are going to build a flow with subflows and show you the different options you have for the child nodes.

:::caution Order of Nodes
It's important that your parent nodes appear before their children in the `nodes`/ `defaultNodes` array to get processed correctly.
:::

### Adding Child Nodes

If you want to add a node to another node you need to use the `parentNode` option. We gave the parent a certain width and height via the style option and also set the child extent to `'parent'` so that we can't move them out of the parent node:

import CodeViewer from '/src/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/SubFlows" applyStyles={false} options={editorOptions} activeFile="nodes.js" additionalFiles={['nodes.js','edges.js']} />

When you move the underlying parent node you can see that the child nodes move too.
