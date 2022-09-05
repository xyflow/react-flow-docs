---
title: Testing
sidebar_position: 10
---

There are plenty of options to test a React application. If you are using React Flow, we recommend to use [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/). React Flow needs to measure nodes in order to render edges and for that relies on rendering DOM elements. If you are using cypress or playwright, no additional setup is needed.

## Using Jest

If you are using [Jest](https://jestjs.io/), you need to mock some features in order to be able to run your tests. You can do that by adding the following lines to your `setupTests` file (or inside a `beforeEach`):

```ts
import { ResizeObserver } from '@juggle/resize-observer';

global.ResizeObserver = ResizeObserver;

// we only use the scale of the matrix (`m22`), that's why we can use this simple mock
class DOMMatrixReadOnly {
  m22: number;
  constructor(transform: string) {
    const scale = transform?.match(/scale\(([1-9.])\)/)?.[1];
    this.m22 = scale !== undefined ? +scale : 1;
  }
}
// @ts-ignore
global.DOMMatrixReadOnly = DOMMatrixReadOnly;

// used for measuring nodes
Object.defineProperties(global.HTMLElement.prototype, {
  offsetHeight: {
    get() {
      return parseFloat(this.style.height) || 1;
    },
  },
  offsetWidth: {
    get() {
      return parseFloat(this.style.width) || 1;
    },
  },
});

(global.SVGElement as any).prototype.getBBox = () => ({ x: 0, y: 0, width: 0, height: 0 });
```

In addition to that, you need to add a specific `width` and `height` via the `style` option to your nodes, so that the ResizeObserver gets activated. Example:

```ts
const nodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
    // 👇 this needs to be set explicitly
    style: {
      width: 100,
      height: 50,
    },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 100, y: 100 },
    // 👇 this needs to be set explicitly
    style: {
      width: 100,
      height: 50,
    },
  },
];
```
