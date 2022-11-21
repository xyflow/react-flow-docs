---
title: <Panel />
sidebar_position: 4
---

import PropItems from '../../../src/components/Docs/PropItems'
import CodeViewer from '../../../src/components/CodeViewer';

`Panel` is a helper component that lets you position content on top of the React Flow viewport. It is used internally by the [`Controls`](/docs/api/plugin-components/controls) and [`Minimap`](/docs/api/plugin-components/minimap).

## Example Usage

<CodeViewer options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} codePath="api-flows/Panel" additionalFiles={['style.css']} applyStyles={false} />

### Prop Types

import options from '../../../docs-data/panel';

<PropItems props={options} />

### Typescript

The interface of the Panel Prop Types are exported as `PanelProps`.
