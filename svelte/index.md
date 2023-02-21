---
title: React Flow for Svelte
sidebar_label: Introduction
sidebar_position: 0
---

import CodeViewer from '../src/components/CodeViewer';

Welcome to React Flow for Svelte. Read our blog post on the svelte version to get started. This documentation is in very early stages, too. You can find more detailed information on the core concepts in our React docs.

:::caution
React Flow for Svelte is in a very early alpha stage. You can support and speed up the development process by sending us bug reports and feedback to info@reactflow.dev
:::

## Installation

The React Flow Svelte package is published on npm as [`@reactflow/svelte`](https://npmjs.com/package/@reactflow/svelte).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/svelte@0.0.1-alpha
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/svelte@0.0.1-alpha
```

  </TabItem>
  <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/svelte@0.0.1-alpha
```

  </TabItem>
</Tabs>

This is the documentation for the svelte alpha version.

## Getting Started

```svelte
<script lang="ts">
import SvelteFlow, { Controls, Background, BackgroundVariant, Minimap } from '@reactflow/svelte';

const nodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const edges = [{ id: 'e1-2', source: '1', target: '2' }];
</script>

<SvelteFlow {nodes} {edges} fitView >
  <Controls />
  <Background variant={BackgroundVariant.Dots} />
  <Minimap />
</SvelteFlow>

<style>
  :root {
    --node-width: 50;
  }
</style>
```

<!-- <CodeViewer isSvelte options={{ editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }} activeFile="ResizableNode.js" codePath="svelte-flows/introduction" applyStyles={false} /> -->
