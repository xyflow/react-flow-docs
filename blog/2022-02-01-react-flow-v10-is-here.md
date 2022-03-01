---
slug: react-flow-v10
title: React Flow v10 is finally here!
authors: ['moritz', 'christopher']
tags: ['react-flow', 'announcement']
---

After several months of hard work, we can finally announce the release of React Flow version 10. Together with the new library version, we are also releasing a fully revised documentation that is now powered by [Docusaurus](https://docusaurus.io/). Last but not least, we are releasing [React Flow Pro](https://pro.reactflow.dev), our new subscription model for React Flow. This post is meant to explain the details about everything that is new in React Flow version 10. If you want to migrate from v9 to v10, please read the [migration guide](/docs/guides/migrate-to-v10).

## Recap: Two Years React Flow

Almost two years ago we [open sourced React Flow](https://webkid.io/blog/react-flow-node-based-graph-library/). We've built it for our flow-based data processing tool [Datablocks](https://datablocks.pro), that we launched a year later. Since then we put more and more time into React Flow and related projects and it got a lot of traction (100k+ visitors per month, 9k+ stars on Github, 1k+ Discord members, 100k+ weekly downloads on npm). We are super happy about the community that has developed around React Flow and we want to secure the further existence and development with React Flow Pro.

## New Features

The version 10 comes with lots of new features. Besides a complete rewrite of the internal state management, the separation of nodes and edges and several bug fixes and refactorings, these are the most important new features:

### 1. Sub Flows

When you look at the [Github disscussion section](https://github.com/wbkd/react-flow/discussions/1024), this was the most awaited feature. While developing flow-based editors it's very common, that you want to separate a part of your logic, or want to group nodes for examples. This is now possible by using the `parentNode` option:

import CodeViewer from '/src/components/CodeViewer'
const editorOptions = { editorHeight: 400, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/SubFlows3" options={editorOptions} additionalFiles={['nodes.js','edges.js']} />

- **Touch Device Support**: Connect nodes on touch devices
- **Key Handling**: Multiple keys and key combinations
- **Several new hooks**: `useReactFlow`, `useNodes`, `useEdges`, `useViewport`, `useKeypress`
- **Fit View**: Fit the initial view automatically

## React Flow Pro

- want to work full time for React Flow
- subscription model to support the work and get a white label version
- custom plan with support, feature-based development help, etc

## Bye

- follow us on @reactflow
- contact us, feedback etc
