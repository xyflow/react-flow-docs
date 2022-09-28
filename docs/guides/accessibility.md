---
title: Accessibility
sidebar_position: 10
---

A flow is accessible with a keyboard and readable by a screenreader. Nodes and edges are focusable, selectable, moveable and deleteable with the keyboard.

:::info
If you have an idea how we can improve the accessibility of React Flow, please feel free to [contact us](https://pro.reactflow.dev/contact).
:::

## Built-in Features

### Keyboard Controls

- Nodes and edges are focusable by using the `Tab` key (`tabIndex={0}` + `role="button"`)
- Nodes and edges are selectable by using `Enter` or `Space`, un-selectable by using `Escape`
- Nodes are moveable with arrow keys
- Nodes and Edges get a `aria-describedby` attribute to describe keyboard controls

:::info

All features above can be disabled with the `disableKeyboardA11y` prop

:::

### WAI-ARIA

- Edges: Default `aria-label` - overwritable with new `Edge` option `ariaLabel`
- Nodes: `ariaLabel` option (no default here, because we assume that there might be text inside the node)
- Minimap component: `aria-describedby` + title
- Attribution component: `aria-label`
- Controls component: `aria-labels` for buttons

## Better accessible node-based UIs

- When your nodes don't have textual content, you should provide an aria-label via the node options.
- You can improve the default `aria-label` ('from source.id to target.id') of an edge, when your nodes have names that you could use by passing specific aria-labels to the edges.
- follow best [practice WAI-ARIA guides](https://w3c.github.io/aria-practices/) in your application
