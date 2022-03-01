---
title: Plugin Components
sidebar_position: 4
---

React Flow comes with additional components. In this guide we show you how to use them. We are using our [previous example code](/docs/getting-started/core-concepts) here.

### MiniMap

If your flow gets bigger, you might want to get an overview quickly. For this we are exporting the [`MiniMap` component](/docs/api/plugin-components/minimap). You can easily add it to your flow by adding it as a children:

import CodeViewer from '/src/components/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/MiniMap" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js', 'edges.js']} />

### Controls

React Flow comes with a customizable controls bar, that you can use by importing the [`Controls` component](/docs/api/plugin-components/controls)

<CodeViewer codePath="api-flows/Controls" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js', 'edges.js']} />

### Background

If you want to display the pattern background, you can use the [`Background` component](/docs/api/plugin-components/background)

<CodeViewer codePath="api-flows/Background" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js', 'edges.js']} />
