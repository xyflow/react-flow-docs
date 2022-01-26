---
title: Node Types
sidebar_position: 2
---

There are three built-in node types (`default`, `input`, `output`) that you can use. The node types differ in the number and types of handles. An input node has only a source handle, a default node has a source and a target and an output node has only a target handle. The default `nodeTypes` object looks like this:

```js
{
  input: InputNode,
  default: DefaultNode,
  output: OutputNode
}
```

The keys represent the type names and the values are the components that get rendered.
You can add new types by creating a [custom node](/docs/api/nodes/custom-node).

### Example

import CodeViewer from '/src/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/NodeTypes" applyStyles={false} options={editorOptions} />
