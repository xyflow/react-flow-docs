---
title: Packages
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Here we list all React Flow packages that we published on npm.

## Main Package

We recommend to use the `reactflow` package. It contains `@reactflow/core`, `@reactflow/background`, `@reactflow/controls` and `@reactflow/minimap`.

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

## Sub Packages

The `reactflow` package is separated into multiple packages that can be installed separately. All packages are published under the [`@reactflow` organization](https://www.npmjs.com/org/reactflow) on npm. All of the following packages only use **named exports**.

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
