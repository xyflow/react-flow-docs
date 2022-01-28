---
title: Sub Flows
sidebar_position: 2
---

A subflow is a flow inside a node. It can be a separate flow or a flow that is connected with other nodes outside of its parent. This feature can also be used for grouping nodes. In this part of the docs we are going to build a flow with subflows and show you the different options you have for the child nodes.

### Adding Nodes to a Node

If you want to add a node to another node you need to use the `parentNode` option:

import CodeViewer from '/src/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/SubFlows" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js','edges.js']} />
