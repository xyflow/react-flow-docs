---
title: Edge Types
sidebar_position: 2
---

React Flow comes with four edge types (`default`, `straight`, `step`, `smoothstep`). As the names indicate, the edges differ in the representation. The default type is a bezier edge.
The basic edge types are `default` (bezier), `straight`, `step` and `smoothstep`. The default `edgeTypes` object looks like this:

```javascript
{
  default: BezierEdge,
  straight: StraightEdge,
  step: StepEdge,
  smoothstep: SmoothStepEdge
}
```

The keys represent the type names and the values are the edge components.

### Example

import CodeViewer from '/src/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/EdgeTypes" applyStyles={false} options={editorOptions} activeFile="edges.js" additionalFiles={['nodes.js', 'edges.js']} />
