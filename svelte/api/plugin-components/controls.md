---
title: <Controls />
sidebar_position: 2
---

import PropItems from '../../../src/components/Docs/PropItems'
import CodeViewer from '../../../src/components/CodeViewer';

The controls component contains a panel with a zoom-in, zoom-out, fit-view and a lock/unlock button. You can use it by passing it as a children to the `ReactFlow` component.

### Usage Example

<CodeViewer options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} codePath="api-flows/Controls" applyStyles={false} additionalFiles={['nodes.js', 'edges.js']} />

### Prop Types

import options from '../../../docs-data/controls';

<PropItems props={options} />

### Typescript

The interface of the Controls Prop Types are exported as`ControlProps`.

## Extended Controls

You can add buttons to the control panel by using the `ControlButton` component and pass it as a children to the `Controls` component:

<CodeViewer options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} codePath="api-flows/CustomControls" applyStyles={false} additionalFiles={['nodes.js', 'edges.js']} />

### ControlButton Prop Types

All props get forwarded to the `ControlButton` component.

### Npm Package

The controls component is published under `@reactflow/controls` and can also be [installed and used separately](/docs/overview/packages/#reactflowcontrols).
