---
slug: js-layouting-libraries-node-based-ui
title: 5 libraries to create directed tree layouts in node based UIs
authors: ['christopher', 'moritz']
tags: ['layouting']
hide_table_of_contents: true
image: /img/blog/v10-header.png
---

In this post we will present some Javascript libraries to do automated layouting in a node-UI based application like a workflow builder, ML pipeline or a whiteboard tool. The examples are built with React Flow but you could also use another library for rendering the nodes and edges. The focus of this article is more on the layouting libraries rather than React Flow itself.

### What is Layouting?

In a graph, every node has a x- and y-coordinate that define the position. When we are using an algorithm that helps us to calculate positions for our nodes so that they don't overlap or form a tree for example, we call it layouting.

import CodeViewer from '/src/components/CodeViewer'
const editorOptions = { editorHeight: 300 }

## Javascript Layouting Libraries

In the following section, we present five Javascript libraries that help you to layout a node based UI. We are mentioning some pros and cons for every library to help you with your decision which library to chose for your usecase.

### ElkJS

<CodeViewer dependencies={{ elkjs: 'latest' }} codePath="blog-flows/layouting/elkjs" options={editorOptions} additionalFiles={['layout.js']} />

<div style={{ fontSize: 12, marginTop: -20, marginBottom: 10, textAlign: 'center', color: '#777' }}>Some of the most awaited features: Sub Flows!</div>

ELK is a huge collection of very powerful layouting algorithms. It stands for **E**clispe **L**ayout **K**ernel which is an "infrastructure to connect diagram editors". Elkjs ported the layout related pieces from Java to Javascript, so that it can be used in the browser to layout diagramms.

#### Pros

- supports layouting for nested flows
- comes with multiple layout algorithms like tree, radial, force or layered
- supports edge routing

#### Cons

- complicated and bit uncommon API
- huge file size

[Elkjs website](https://github.com/kieler/elkjs)

### D3-Hierarchy

<CodeViewer dependencies={{ 'd3-hierarchy': 'latest' }} codePath="blog-flows/layouting/d3-hierarchy" options={editorOptions} additionalFiles={['layout.js']} />

<div style={{ fontSize: 12, marginTop: -20, marginBottom: 10, textAlign: 'center', color: '#777' }}>Some of the most awaited features: Sub Flows!</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.

#### Pros

#### Cons

[d3-hierarchy website](https://github.com/d3/d3-hierarchy)

### Dagre

<CodeViewer dependencies={{ 'dagre': 'latest' }} codePath="blog-flows/layouting/dagre" options={editorOptions} additionalFiles={['layout.js']} />

<div style={{ fontSize: 12, marginTop: -20, marginBottom: 10, textAlign: 'center', color: '#777' }}>Some of the most awaited features: Sub Flows!</div>

Even if dagre is currently deprecated because it is not maintained, we recommend it to get started. It is easy to setup, has a small API and works great for smaller and medium sized graphs.

#### Pros

- Easy to use API
- Small bundle size

#### Cons

- Currenty not maintained and therefor deprecated

[dagre website](https://github.com/dagrejs/dagre)

### Graphology

<CodeViewer codePath="api-flows/SubFlows3" options={editorOptions} showEditor={false} additionalFiles={['nodes.js','edges.js']} />

<div style={{ fontSize: 12, marginTop: -20, marginBottom: 10, textAlign: 'center', color: '#777' }}>Some of the most awaited features: Sub Flows!</div>

Graphology is a library to work with graphs. The main part is about creating and mutating `Graph` objects. Besides that it comes with a big standard library that is devided into several modules for layouting, traversal, rendering and more.

#### Pros

- Feature-rich: layouting, traversal, rendering and more
- Supports multiple layouting algorithms: circle, force, no-overlap

#### Cons

- You can't just use the layouting module, but you always need to use the main `graphology` library too (of course this is only a disadvantage if you are working with other libraries like React Flow or Reaflo for example. If you are using Graphology for rendering your graphs, this point is neglectable).

[graphology website](https://github.com/graphology/graphology)

### D3-Dag

<CodeViewer codePath="api-flows/SubFlows3" options={editorOptions} showEditor={false} additionalFiles={['nodes.js','edges.js']} />

<div style={{ fontSize: 12, marginTop: -20, marginBottom: 10, textAlign: 'center', color: '#777' }}>Some of the most awaited features: Sub Flows!</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.

#### Pros

#### Cons

[d3-dag website](https://github.com/erikbrinkman/d3-dag)
