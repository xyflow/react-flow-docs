---
title: Terms and Definitions
sidebar_position: 1
---

In this part of the docs we are explaining some basic React Flow terms and definition. Three things you’ll be using a lot in React Flow are nodes, edges, and handles.

## Nodes

import NodesFlow from '../../src/components/CodeViewer/basic-terms/nodes'

<NodesFlow />

A node is a React component and therefore can render anything you want. Each node has an x- and y-coordinate, which tells it where it exists on the viewport. By default, a node looks like it does in the example above. You can find all the options in the [Node options docs](/docs/api/nodes/node-options/) section.

### Custom Nodes

This is where the magic of React Flow happens. You can customize nodes to look and act however you would like. Much of the functionality that you might create is not built-in to React Flow. Some of the things you might do with a custom node are:

- Render form elements
- Visualize data
- Support multiple handles

## Handles

import HandlesFlow from '../../src/components/CodeViewer/basic-terms/handles'

<HandlesFlow />

A handle (also called “port” in other libraries) is the place that an edge attaches to a node. The handle can be anywhere, and styled in any way. It’s just a div. By default, it appears as a grey circle on the top, bottom, left, or right of the node. By creating a custom node, you can have as many handles as you would like in any location on the node. More information can be found in the [handle docs](/docs/api/nodes/handle/).

## Edges

import EdgesFlow from '../../src/components/CodeViewer/basic-terms/edges'

<EdgesFlow />

An edge connects two nodes. Every edge needs a target and a source node. React Flow comes with four built-in edges types: default (bezier), smoothstep, step and straight. An edge is a path inside a SVG and can be styled with CSS and is completely customizable.

### Custom Edges

Like custom nodes, you can also customize edges. Things that people do with custom edges are:

- Add a button to remove an edge
- Custom routing behaviour

## Connection Line

React Flow has built-in functionality to click-and-drag from one handle to another in order to create a new edge. Before it becomes an edge, this line is called a connection line. The connection line also comes with four types built-in and is customizable. You can find the props for configuring the connection line in the [props section](/docs/api/react-flow-props/#connection-line).

## Viewport

import ViewportFlow from '../../src/components/CodeViewer/basic-terms/viewport'

<ViewportFlow />

All of React Flow exists inside of the viewport. The viewport has a x, y and zoom value. When you drag the pane, you change the x and y coordinates and when you zoom in our out you alter the zoom level.
