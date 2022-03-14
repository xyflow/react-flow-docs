---
slug: react-flow-v10
title: Releasing React Flow 10 and React Flow Pro
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

## Recap: Two Years of React Flow

Almost two years ago we [open sourced React Flow](https://webkid.io/blog/react-flow-node-based-graph-library/). It was built for our flow-based data processing tool [Datablocks](https://datablocks.pro) that we launched a year later. Since then we put more and more time into React Flow and related projects and it got a lot of traction (100k+ visitors per month on the website, 9k+ stars on Github, 1k+ Discord members, 100k+ weekly downloads on npm).
We are super happy about the progress and the community that has developed around React Flow. We think that the library has a lot of potential to solve problems that many developer teams face when building node-based editors. That's why we want to secure the further existence and development with our new subscription model.

## New Features

Version 10 comes with many new features and improvements. Besides a complete rewrite of the internal state management, the separation of the graph elements into nodes and edges, several bug fixes and refactorings, these are the most important new features:

- **Sub Flows**: Support for sub flows, nested flows and grouping of nodes
- **Touch Device Support**: The UX for connecting nodes on touch devices has been improved
- **Key Handling**: Multiple keys and key combinations are now supported
- **Several new hooks**: `useReactFlow`, `useNodes`, `useEdges`, `useViewport`, `useKeypress` have been refactored to provide a better dev experience
- **Fit View Property**: Fit all nodes and edges initially without writing custom logic
- **Edge Marker**: More options to configure the start and end markers of the edges

The biggest and most awaited (when you look at the [Github discussions](https://github.com/wbkd/react-flow/discussions/1024)) new feature is the support of sub flows and groups. In React Flow v10, a node can specify a `parentNode` which affects its positioning and dragging behaviour. Child nodes get positioned relatively to their parents and are being moved together with their parent node. It is also possible to specify that a child node can not be dragged out of the parent node bounding box. This gives React Flow users the ability to visualize nested data structures and implement features like collapse/expand and zooming into a sub flow.

Another very important improvement is the support of touch devices. Because we designed [datablocks](https://datablocks.pro) as a desktop-only app, it was not possible to connect nodes on touch devices in React Flow v9. With the new version you can create connections by tapping two handles in succession.

React Flow comes with some key handlers for removing, multi selecting and drawing a selection box. These handlers now have more options to be configured. You can not only pass a single key, but also multiple ones or key combinations.

In order to update nodes, edges and the viewport, we implemented a new hook: `useReactFlow`. It comes with useful helpers like `getNode`, `fitView` or `setCenter`. We also added new hooks like `useNodes`, `useEdges`, `useViewport` and `useKeypress`.

There is more! You can find a list with detailed explanations of the new features and breaking changes in the [migration guide](/docs/guides/migrate-to-v10).

## React Flow Pro

Together with the new library version, we are also releasing our subscription model for React Flow. During the past two years we spent a lot of time on improving the library, adding new features, organizing issues and fixing bugs. As it is with early stage open source projects, much of this time was unpaid. For cross-financing the development of React Flow, we started working as contractors on different projects that were related to React Flow. Unfortunately, that did not work for us in the long run as we needed more time to work on the core library and on features that the community considered useful. We also needed more time to answer issues, mails and messages on the Discord server. So, we were asking ourselves: What can we do to finance our work on React Flow more reliably?

Since we wanted to keep the open source MIT license, a proprietary license wouldn't work out for us. Pro features like layouting or copy/paste wouldn't either, because these features would be closed source or proprietary software as well. We already had some Github sponsors so the idea about React Flow Pro is to communicate it more openly that we want to work on the library full time and give advantages for subscribers and sponsors. With a subscription you can now support our work, you are allowed to remove the attribution, you get access to an internal Discord server and you can schedule support calls. We are excited about this change and we hope that it will be well received and will secure our work on React Flow. You can check out the plans and features on the [React Flow Pro site](https://pro.reactflow.dev).

---

Hopefully we could give you a good overview about the new features and and the future plans with React Flow.
If you have any feedback, you can contact us via [mail](maito:info@webkid.io) the [contact form](https://pro.reactflow.dev/contact). Feel free to [follow us on twitter](https://twitter.com/wbkd) for the latest updates about React Flow.
