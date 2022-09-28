---
title: Props List
description: This is the list of props you can pass to the ReactFlow component.
sidebar_position: 1
---

import Link from '@docusaurus/Link';
import PropItems from '../../src/components/Docs/PropItems'

This is the list of props you can pass to the `<ReactFlow />` component.

```jsx
import ReactFlow from 'reactflow';
```

#### Typescript

The interface of the ReactFlow Prop types is exported as `ReactFlowProps`. You can use it in your code as follows:

```javascript
import { ReactFlowProps } from 'reactflow';
```

:::caution

When you pass one of these props: `nodeTypes`, `edgeTypes`, `deleteKeyCode` (as an array), `selectionKeyCode` (as an array), `multiselectionKeyCode` (as an array), `snapGrid` or **any event handler**, you need to define it outside of the component or memoize it in order to prevent unnecessary re-renderings and bugs!

:::

## Basic Props

import basic from '../../docs-data/react-flow-props/basic';

<PropItems props={basic} />

## Flow View

import flowview from '../../docs-data/react-flow-props/flowview';

<PropItems  props={flowview} />

## Edge Specific Props

import edgeSpecific from '../../docs-data/react-flow-props/edge-specific';

<PropItems  props={edgeSpecific} />

## Event Handlers

:::caution

Please wrap all event handlers that you are passing to `<ReactFlow />` with a `useCallback` hook or define it outside of the component.

:::

### General

import general from '../../docs-data/react-flow-props/general';

<PropItems props={general} />

### Nodes

import nodes from '../../docs-data/react-flow-props/nodes';

<PropItems  props={nodes} />

### Edges

import edges from '../../docs-data/react-flow-props/edges';

<PropItems props={edges} />

### Connections

import connections from '../../docs-data/react-flow-props/connections';

<PropItems props={connections} />

### Pane

import pane from '../../docs-data/react-flow-props/pane';

<PropItems  props={pane} />

## Interaction

import interaction from '../../docs-data/react-flow-props/interaction';

<PropItems  props={interaction} />

## Connection Line

import connectionLine from '../../docs-data/react-flow-props/connection-line';

<PropItems  props={connectionLine} />

## Keys

import keys from '../../docs-data/react-flow-props/keys';

<PropItems props={keys} />

## Pro Options

:::info
These options are only intended for subscribers of [React Flow Pro](https://pro.reactflow.dev). If you’re considering removing the attribution, please make sure to read our [Remove Attribution](/docs/guides/remove-attribution) guide first.
:::

import pro from '../../docs-data/react-flow-props/pro';

<PropItems props={pro} />
