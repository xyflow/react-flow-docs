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

import basic from '../../docs-data/react-flow-props/basic';

<PropItems title="Basic Props" props={basic} />

import flowview from '../../docs-data/react-flow-props/flowview';

<PropItems title="Flow View" props={flowview} />

import edgeSpecific from '../../docs-data/react-flow-props/edge-specific';

<PropItems title="Edge Specific Props" props={edgeSpecific} />

## Event Handlers

:::caution

Please wrap all event handlers that you are passing to `<ReactFlow />` with a `useCallback` hook or define it outside of the component.

:::

import general from '../../docs-data/react-flow-props/general';

<PropItems title="General" titleAs="h3" props={general} />

import nodes from '../../docs-data/react-flow-props/nodes';

<PropItems title="Nodes" titleAs="h3" props={nodes} />

import edges from '../../docs-data/react-flow-props/edges';

<PropItems title="Edges" titleAs="h3" props={edges} />

import connections from '../../docs-data/react-flow-props/connections';

<PropItems title="Connections" titleAs="h3" props={connections} />

import pane from '../../docs-data/react-flow-props/pane';

<PropItems title="Pane" titleAs="h3" props={pane} />

import interaction from '../../docs-data/react-flow-props/interaction';

<PropItems title="Interaction" props={interaction} />

import connectionLine from '../../docs-data/react-flow-props/connection-line';

<PropItems title="Connection Line" props={connectionLine} />

import keys from '../../docs-data/react-flow-props/keys';

<PropItems title="Keys" props={keys} />

## Pro

:::info
If you are here because of the attribution, please refer to our [Remove Attribution](/docs/guides/remove-attribution) guide.
:::

import pro from '../../docs-data/react-flow-props/pro';

<PropItems props={pro} />
