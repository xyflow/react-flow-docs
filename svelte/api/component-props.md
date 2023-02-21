---
title: <SvelteFlow />
description: This is the list of props you can pass to the SvelteFlow component.
sidebar_position: 1
---

import Link from '@docusaurus/Link';
import PropItems from '../../src/components/Docs/PropItems'

The `SvelteFlow` component is the default export of the `@reactflow/svelte` package and used for rendering an interactive flow. This is the list of props you can pass to the `<SvelteFlow />` component for configuring it.

```svelte
<script>
import SvelteFlow from '@reactflow/svelte';
</script>
```

#### Typescript

The interface of the SvelteFlow props is exported as `SvelteFlowProps`. You can import it like this:

```svelte
<script lang="ts">
import SvelteFlow, { SvelteFlowProps } from '@reactflow/svelte';
</script>
```

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

### Selection

import selection from '../../docs-data/react-flow-props/selection';

<PropItems  props={selection} />

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
