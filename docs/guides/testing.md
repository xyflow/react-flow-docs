---
title: Testing
sidebar_position: 10
---

There are plenty of options to test a React application. If you are using React Flow, we recommend to use [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/). React Flow needs to measure nodes in order to render edges and for that relies on rendering DOM elements.

## Using Cypress or Playwright

If you are using Cypress or Playwright no additional setup is needed. You can refer to the getting started guide for [Cypress here](https://docs.cypress.io/guides/getting-started/installing-cypress) and for [Playwright here](https://playwright.dev/docs/intro).

## Using Jest

If you are using [Jest](https://jestjs.io/), you need to mock some features in order to be able to run your tests. You can do that by adding the following lines to your `setupTests` file (or inside a `beforeEach`):

```ts
// To make sure that the tests are working, it's important that you are using
// this implementation of ResizeObserver and DOMMatrixReadOnly
class ResizeObserver {
  callback: globalThis.ResizeObserverCallback;

  constructor(callback: globalThis.ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element) {
    this.callback([{ target } as globalThis.ResizeObserverEntry], this);
  }

  unobserve() {}

  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

class DOMMatrixReadOnly {
  m22: number;
  constructor(transform: string) {
    const scale = transform?.match(/scale\(([1-9.])\)/)?.[1];
    this.m22 = scale !== undefined ? +scale : 1;
  }
}
// @ts-ignore
global.DOMMatrixReadOnly = DOMMatrixReadOnly;

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

(global.SVGElement as any).prototype.getBBox = () => ({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
});

export {};
```
