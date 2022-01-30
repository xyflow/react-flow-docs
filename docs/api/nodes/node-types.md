---
title: Node Types
sidebar_position: 2
---

There are three built-in node types (`default`, `input`, `output`, `group`) that you can use. The node types differ in the number and types of handles. An input node has only a source handle, a default node has a source and a target and an output node has only a target handle. You can read about how to add custom types in the [custom node types section](/docs/api/nodes/custom-nodes).

### Built-in Node Types

The default `nodeTypes` object looks like this:

```js
{
  input: InputNode,
  default: DefaultNode,
  output: OutputNode
  group: GroupNode
}
```

The keys represent the type names and the values are the components that get rendered.
You can add new types by creating a [custom node](/docs/api/nodes/custom-nodes).

### Node Types Overview

import CodeViewer from '/src/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/NodeTypes" applyStyles={false} options={editorOptions} />
