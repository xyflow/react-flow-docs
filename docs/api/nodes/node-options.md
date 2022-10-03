---
title: Node Options
sidebar_position: 1
---

import PropItems from '../../../src/components/Docs/PropItems'

You create nodes by adding them to the `nodes` or `defaultNodes` array of the `ReactFlow` component.

**Node example**:

```ts
const node = {
  id: '1',
  type: 'input',
  data: { label: 'Node 1' },
  position: { x: 250, y: 5 },
};
```

## Options

import options from '../../../docs-data/node-options';

<PropItems props={options} />

## Update Node Options

If you want to update the `data` or `style` attribute of a node it is important that you create a new object to notify react flow about the changes. You can see how to update a node in the [update node example](/docs/examples/nodes/update-node/).

## Typescript

A node uses the `Node` type:

```ts
type Node<T = any> = {
  id: string;
  position: XYPosition;
  data: T;
  type?: string;
  style?: CSSProperties;
  className?: string;
  targetPosition?: Position;
  sourcePosition?: Position;
  hidden?: boolean;
  selected?: boolean;
  dragging?: boolean;
  draggable?: boolean;
  selectable?: boolean;
  connectable?: boolean;
  deletable?: boolean;
  focusable?: boolean;
  dragHandle?: string;
  width?: number | null;
  height?: number | null;
  parentNode?: string;
  zIndex?: number;
  extent?: 'parent' | CoordinateExtent;
  expandParent?: boolean;
  positionAbsolute?: XYPosition;
  ariaLabel?: string;

  // only used internally
  [internalsSymbol]?: {
    z?: number;
    handleBounds?: NodeHandleBounds;
    isParent?: boolean;
  };
};
```
