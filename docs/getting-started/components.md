---
title: Built-in Components
sidebar_position: 4
---

React Flow comes with additional components. In this guide we show you how to use them. We are using our [previous example code](/docs/getting-started/interactive-flow#connecting-nodes) here.

### Minimap

If your flow gets bigger, you might want to get an overview quickly. For this we are exporting the [`MiniMap` component](/docs/api/components/minimap). You can easily add it to your flow by adding it as a children:

import ExampleViewer from '../examples/ExampleViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<ExampleViewer example="IntroductionFlow4" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js', 'edges.js']} />

### Controls

React Flow comes with a customizable controls bar, that you can use by importing the [`Controls` component](/docs/api/components/controls)

<ExampleViewer example="IntroductionFlow4" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js', 'edges.js']} />

### Background

If you want to display the pattern background, you can use the [`Background` component](/docs/api/components/background)

<ExampleViewer example="IntroductionFlow4" applyStyles={false} options={editorOptions} additionalFiles={['nodes.js', 'edges.js']} />
