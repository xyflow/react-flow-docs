---
title: Edge Types
sidebar_position: 2
---

React Flow comes with four edge types (`default`, `straight`, `step`, `smoothstep`). As the names indicate, the edges differ in the representation. The default type is a bezier edge.
The basic edge types are `default` (bezier), `straight`, `step` and `smoothstep`. You can read about how to add custom types in the [custom edge types section](/docs/api/edges/custom-edges).

### Built-in Edge Types

The default `edgeTypes` object looks like this:

```javascript
{
  default: BezierEdge,
  straight: StraightEdge,
  step: StepEdge,
  smoothstep: SmoothStepEdge
}
```

The keys represent the type names and the values are the edge components.

### Edge Types Overview

import CodeViewer from '/src/components/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/EdgeTypes" applyStyles={false} options={editorOptions} activeFile="edges.js" additionalFiles={['nodes.js', 'edges.js']} />
