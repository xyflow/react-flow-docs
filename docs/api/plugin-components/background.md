---
title: <Background />
sidebar_position: 1
---

import PropItems from '../../../src/components/Docs/PropItems'
import CodeViewer from '../../../src/components/CodeViewer';

The Background component comes with three background variants: **dots**, **lines** and **cross**. You can use it by passing it as a children to the `ReactFlow` component.

### Usage Example

<CodeViewer options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} codePath="api-flows/Background" applyStyles={false} additionalFiles={['nodes.js', 'edges.js']} />

### Prop Types

import options from '../../../docs-data/background';

<PropItems props={options} />

### Typescript

The type of the Background Prop Types are exported as `BackgroundProps`.

### Npm Package

The background component is published under `@reactflow/background` and can also be [installed and used separately](/docs/overview/packages/#reactflowbackground).
