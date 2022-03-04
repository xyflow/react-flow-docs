---
slug: react-flow-v10
title: React Flow v10 is finally here!
authors: ['moritz', 'christopher']
tags: ['react-flow', 'announcement']
hide_table_of_contents: true
---

After several months of hard work, we can finally announce the release of React Flow version 10. Together with the new library version, we are also releasing a fully revised documentation that is now powered by [Docusaurus](https://docusaurus.io/). Last but not least, we are releasing [React Flow Pro](https://pro.reactflow.dev), our new subscription model for React Flow. This post is meant to explain the details about everything that is new in React Flow version 10. If you want to migrate from v9 to v10, please read the [migration guide](/docs/guides/migrate-to-v10).

<!--truncate-->

import CodeViewer from '/src/components/CodeViewer'
const editorOptions = { editorHeight: 300 }

<div style={{ marginTop: 40 }}/>

<CodeViewer codePath="api-flows/SubFlows3" options={editorOptions} showEditor={false} additionalFiles={['nodes.js','edges.js']} />

<div style={{ fontSize: 12, marginTop: -24, textAlign: 'center', color: '#777' }}>Some of the most awaited features: Sub Flows!</div>

## Recap: Two Years React Flow

Almost two years ago we [open sourced React Flow](https://webkid.io/blog/react-flow-node-based-graph-library/). We've built it for our flow-based data processing tool [Datablocks](https://datablocks.pro), that we launched a year later. Since then we put more and more time into React Flow and related projects and it got a lot of traction (100k+ visitors per month, 9k+ stars on Github, 1k+ Discord members, 100k+ weekly downloads on npm). We are super happy about the progress and the community that has developed around React Flow and we want to secure the further existence and development with the React Flow Pro plans.

## New Features

Version 10 comes with lots of new features. Besides a complete rewrite of the internal state management, the separation of nodes and edges and several bug fixes and refactorings, these are the most important new features:

- **Sub Flows**: Support for sub flows, nested flows and groups
- **Touch Device Support**: Connect nodes on touch devices
- **Key Handling**: Multiple keys and key combinations
- **Several new hooks**: `useReactFlow`, `useNodes`, `useEdges`, `useViewport`, `useKeypress`
- **Fit View**: Fit the initial view automatically
- **Edge Marker**: More options to configure edge marker

The biggest new feature is the support of sub flows and groups. When you take a look at the [Github discussions](https://github.com/wbkd/react-flow/discussions/1024), this was the most awaited feature. With React Flow v10 a node can specify a `parentNode`. This affects the positioning and the dragging behaviour of a node. Child nodes get positioned relatively to their parents and move when their parent moves. It's also possible to define that a child node can't be dragged out of its parent.
Another very important improvement is the support of touch devices. Before React Flow v10 it wasn't possible to connect nodes on touch devices. With the new version you can create connections by tapping on a handle and then on another one.
React Flow comes with some key handlers for removing, multi selecting and drawing a selection box. These handlers are now much better to configure. You can not only pass a single key, but also mutliple ones or key combinations.
In order to update nodes, edges and the viewport, we implemented a new hook: `useReactFlow`. It comes with useful helpers like `getNode`, `fitView` or `setCenter`. We also added new hooks like `useNodes`, `useEdges`, `useVieweport` and `useKeypress`.
There is more! You can find a list with detailed explanations of the new features and breaking changes in the [migration guide](/docs/guides/migrate-to-v10).

## React Flow Pro

We thought about this a lot. What can we do to finance our work on React Flow more reliably? First we did a lot of development work on React Flow related projects to cross finance it, but this didn't work out in the long run. We needed more time to work on the core and on new features that the community considered to be useful. More over we needed time to answer issues, mails and messages on the Discord server. Since we wanted to keep the open source MIT license, a proprietary license wouldn't work out for us. Pro features like layouting or copy/paste wouldn't either, because these features would be closed source or proprietary software as well. We already had some Github sponsors so the idea about React Flow Pro is to communicate it more openly that we want to work on the library full time and give advantages for subscribers and sponsors. With a subscription you can now support our work, you are allowed to remove the attribution, you get access to an internal Discord server and you can schedule support calls. We are excited about this change and we hope that it will be well received and will secure our work on React Flow. You can check out the plans and features on the [React Flow Pro site](https://pro.reactflow.dev).

## Bye

Hopefully we could give you a good overview about the new features and and the future plans with React Flow.
If you have any feedback, you can contact us via [mail](maito:info@webkid.io) the [contact form](https://pro.reactflow.dev/contact). Feel free to [follow us on twitter](https://twitter.com/wbkd) for the latest updates about React Flow.
