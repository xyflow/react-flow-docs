---
slug: react-flow-v11
title: 'Major Release: React Flow 11'
authors: ['moritz']
tags: ['react-flow', 'release']
hide_table_of_contents: true
image: https://i.imgur.com/mErPwqL.png
---

import Image from '@theme/IdealImage';

A lot has happened since we published our last blog post six months ago. We got our first pro subscribers, we hired John who helps us with the docs, communication and community (we are now a team of three persons ) and we are working full time on React Flow 🥳. Today we are releasing a new major version with lots of new feature and only very few breaking changes (unlike the last major update..).

<!--truncate-->

The biggest change, is that we got a new package name! A very nice person gave us the [`reactflow` npm package](https://www.npmjs.com/reactflow) name and we also got the [`@reactflow` organization](https://www.npmjs.com/org/reactflow). So from now on, you can install React Flow via:

```shell
npm install reactflow
```

and then use it as before:

```jsx
import ReactFlow, { Controls, Background } from 'reactflow';

function Flow({ nodes, edges }) {
  return (
    <ReactFlow nodes={nodes} edges={edges}>
      <Controls />
      <Background />
    </ReactFlow>
  );
}
```

Looks nice, right? Under the hood we are publishing packages separately in the `@reactflow` organization. These packages are used by the main `reactflow` package and also can be [used separately](/docs/getting-started/installation/#using-packages). From now on React Flow is a monorepo powered by [turborepo](https://turborepo.org/), [Rollup](https://rollupjs.org/) and [Vite](https://vitejs.dev/).

## New Features

The new monorepo setup helps us to organize the code in separate packages and gives us the opportunity to publish packages that are not part of the main `reactflow` package. We could close xxx issues on Github and wrote tons of tests cases. We are not only using e2e tests anymore but also doing component tests, too.

### Accessibility

What could be a better topic than a11y (accessibility) for a v11 release?! Accessibility was quite limited in the previous versions and we put a lot of work into it to make it better by default. You can now interact with a flow with your keyboard. You can focus nodes and edges with `Tab`, select an element with `Enter` and move nodes around with the arrow keys. More over we added default aria-labels to all elements on the pane and made them configurable with new `ariaLabel` options for nodes and edges. You can refer to the new [Accessibility guide](/docs/guides/accessibility) for more information.

### Edges

Whereas in v10, the nodes were a bit more in the spotlight, this time we've put a special focus on the edges. A lot of people complained, that thin edges are hard to select. We've fixed that by introducing a new [`interactionWidth` edge option](http://localhost:3000/docs/api/edges/edge-options/#options). Its default value is 20, meaning that a 20px wide invisible edge gets painted below the visible edge for an easier interaction. Another big update is a complete rewrite of the edge routing for `smoothstep` and `step` edge types.

<Image img={require('/img/blog/v11/ReactFlow-EdgeRoutingv10vsv11.png')} />

That's not all. We also revised the edge [update behaviour](https://twitter.com/reactflowdev/status/1564966917517021184), added [`pathOptions`](/docs/api/edges/edge-options/#options) for `default` and `smoothstep` edges and a new `deletable` flag. For making it easier to develop custom edges we are exporting a [`<BaseEdge />` component](/docs/api/edges/base-edge/) that can draw the invisible helper edge and the label for you.

### Nodes

To make layouting easier, we've added a new prop called [`nodeOrigin`](/docs/api/react-flow-props/). The origin was always in the lop left, meaning that you need to subtract half the width and height to center a node. Now you can set `nodeOrigin={[0.5, 0.5]}` to set the origin to the center or `nodeOrigin={[1, 1]}` to set it to the bottom right. Furthermore we've implemented a [`useNodesInitialized` hook](/docs/api/hooks/use-nodes-initialized). It returns a boolean that can be used to determine if all nodes are initialized and a new layout should be done, for example. Another small change is that you can pan over a node when it's not draggable which makes it easier to navigate bigger flows.

### Hooks

In the future we want to get rid of some <ReactFlow /> component props (there are 140+ 😵‍💫). One idea is to new introduce hooks. With this release we are adding the `useOnViewportChange` and the `useOnSelectionChange` hook. Before this release you could only listen to a viewport change by using `onMoveStart`, `onMove` and `onMoveEnd`. With the new `useOnViewportChange` hook, you can easily listen to changes in every component.

### Miscellaneous

The background got a [new variant `cross`](/docs/api/plugin-components/background/#prop-types), and you can control the gap size horizontally and vertically individually for all variants. We've added new handlers that make it easier to add mouse event handlers to the pane (the area below the nodes): [`onPaneMouseEnter`, `onPaneMouseMove` and `onPaneMouseLeave`](/docs/api/react-flow-props/#pane). Last but not least the cursor is a grabbing hand while dragging the pane or a node and you pan over nodes when they are not draggable. Strange that this wasn't always the case?!

### What's Next?

React Flow is not just the library. It's the website with the docs and the examples, the pro platform and also the community on Github and Discord! In the upcoming weeks and months we want to make the onboarding for developers and especially beginner developers easier. For that we are working on an in-depth getting started guide and easier to understand docs in general. We are also rebrushing the pro platform so that you can get more out of the pro examples.
