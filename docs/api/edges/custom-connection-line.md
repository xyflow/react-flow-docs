---
title: Custom Connection Line
sidebar_position: 6
---

import PropItems from '../../../src/components/Docs/PropItems'

The connection line is the line that gets drawn while you connect two nodes with each other.
You can adjust the connection line by using the props documented in the [connection line options section](/docs/api/react-flow-props/#connection-line). If you want to implement a custom connection line, you can pass a React component to the `connectionLineComponent` prop. The connection line component will receive the following props:

### Connection Line Component Props

import connectionlineProps from '../../../docs-data/custom-connection-line';

<PropItems props={connectionlineProps} />

<div style={{ marginBottom: 20 }} />

You can find an implementation in the [custom connection line example](/docs/examples/edges/custom-connectionline/).
