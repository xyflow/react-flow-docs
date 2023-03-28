---
title: Packages
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Here we list all React Flow packages that we are publishing on npm.

## Main Package

We recommend to use the [`reactflow` package](https://www.npmjs.com/package/reactflow). It contains the following packages:

- `@reactflow/core`
- [`@reactflow/background`](/docs/api/plugin-components/background)
- [`@reactflow/controls`](/docs/api/plugin-components/controls)
- [`@reactflow/minimap`](/docs/api/plugin-components/minimap)
- [`@reactflow/node-toolbar`](/docs/api/nodes/node-toolbar)
- [`@reactflow/node-resizer`](/docs/api/nodes/node-resizer) (since v11.7.0)

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install reactflow
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add reactflow
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add reactflow
```

  </TabItem>
</Tabs>

All examples and guides are using the `reactflow` package. If you only want to use parts of it, you can install the sub packages.

## Sub Packages

The `reactflow` package contains multiple packages that can be installed separately. All packages are published under the [`@reactflow` organization](https://www.npmjs.com/org/reactflow) on npm. All of the following packages only use **named exports**.

### @reactflow/core

The core package exports the main `<ReactFlow />` component, the `<ReactFlowProvider />`, all hooks and all util functions:

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/core
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/core
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/core
```

  </TabItem>
</Tabs>

#### Usage

```js
import { ReactFlow, useReactFlow } from '@reactflow/core';
```

### @reactflow/background

This package exports the [Background component](/docs/api/plugin-components/background).

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/background
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/background
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/background
```

  </TabItem>
</Tabs>

#### Usage

```js
import { Background } from '@reactflow/background';
```

### @reactflow/controls

This package exports the [Controls and ControlButton component](/docs/api/plugin-components/controls).

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/controls
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/controls
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/controls
```

  </TabItem>
</Tabs>

#### Usage

```js
import { Controls, ControlButton } from '@reactflow/controls';
```

### @reactflow/minimap

This package exports the [MiniMap component](/docs/api/plugin-components/minimap).

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/minimap
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/minimap
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/minimap
```

  </TabItem>
</Tabs>

#### Usage

```js
import { MiniMap } from '@reactflow/minimap';
```

### @reactflow/node-toolbar

This package exports the [NodeToolbar component](/docs/api/nodes/node-toolbar).

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/node-toolbar
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/node-toolbar
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/node-toolbar
```

  </TabItem>
</Tabs>

#### Usage

```js
import { NodeToolbar } from '@reactflow/node-toolbar';
```

### @reactflow/node-resizer

This package exports the [NodeResizer component](/docs/api/nodes/node-resizer).

#### Installation

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @reactflow/node-resizer
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @reactflow/node-resizer
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add @reactflow/node-resizer
```

  </TabItem>
</Tabs>

#### Usage

```js
import { NodeResizer, NodeResizeControl } from '@reactflow/node-resizer';
```
