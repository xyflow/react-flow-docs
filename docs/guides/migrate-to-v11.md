---
title: Migrate to v11
sidebar_position: 9
---

React Flow v11 is the latest major library version. The most noticable change is the new repo structure and build process. React Flow is now a monorepo with different packages that are published to npm under the `@react-flow` namespace. In addition to that, there are some API changes and new APIs introduced in v11. This guide explains the changes in detail and helps you to migrate from v10 to v11.

## Breaking Changes

### Renaming the npm package

The package `react-flow-renderer` has been renamed to `@react-flow/core`

Old API:

```jsx
// npm install react-flow-renderer
import ReactFlow from 'react-flow-renderer';
```

New API:

```jsx
// npm install @react-flow/core
import ReactFlow from '@react-flow/core';
```

### Plugin components moved to invidividual packages

Previously, the `react-flow-renderer` package was exporting the `MiniMap`, `Background` and `Controls` components. With v11, we have removed these components from the core and into their own packages (`@react-flow/minimap`, `@react-flow/background` and `@react-flow/controls`).

Old API:

```jsx
// npm install react-flow-renderer
import { MiniMap, Background, Controls } from 'react-flow-renderer';
```

```jsx
// npm install @react-flow/core @react-flow/minimap @react-flow/background @react-flow/controls
import ReactFlow from '@react-flow/core';

import MiniMap from '@react-flow/minimap';
import Background from '@react-flow/background';
import Controls from '@react-flow/controls';

export default () => (
  <ReactFlow>
    <MiniMap />
    <Background />
    <Controls />
  </ReactFlow>
);
```

### Removal of the nocss entrypoint

Old API:

```jsx
import ReactFlow from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
```

New API:

```jsx
import ReactFlow from '@react-flow/core';
// styles will be automatically injected
// overwrite styles with local css if needed
```

### The props `defaultPosition` and `defaultZoom` have been merged to `defaultViewport`

Old API:

```jsx
import ReactFlow from 'react-flow-renderer';

const BasicFlow = () => {
  return (
    <ReactFlow
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      defaultPosition={[10, 15]}
      defaultZoom={5}
    />
  );
};

export default BasicFlow;
```

New API:

```jsx
import ReactFlow from '@react-flow/core';

const BasicFlow = () => {
  return (
    <ReactFlow
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      defaultViewport={{ x: 10, y: 15, zoom: 5 }}
    />
  );
};

export default BasicFlow;
```

### Removal of `onClickConnectStop` and `onConnectStop`

Old API:

```jsx
import ReactFlow from 'react-flow-renderer';

const BasicFlow = () => {
  const onConnectStop = () => console.log('on connect stop');

  return (
    <ReactFlow
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      onConnectStop={onConnectStop}
      onClickConnectStop={onConnectStop}
    />
  );
};

export default BasicFlow;
```

New API:

```jsx
import ReactFlow from '@react-flow/core';

const BasicFlow = () => {
  const onConnectEnd = () => console.log('on connect stop');

  return (
    <ReactFlow
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      onConnectEnd={onConnectEnd}
      onClickConnectEnd={onConnectEnd}
    />
  );
};

export default BasicFlow;
```

### New props: `onPaneMouseEnter`, `onPaneMouseMove` and `onPaneMouseLeave`

Example:

```jsx
import ReactFlow from '@react-flow/core';

const BasicFlow = () => {
  const onPaneMouseEnter = () => console.log('on pane enter');
  const onPaneMouseMove = () => console.log('on pane move');
  const onPaneMouseLeave = () => console.log('on pane leave');

  return (
    <ReactFlow
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      onPaneMouseEnter={onPaneMouseEnter}
      onPaneMouseMove={onPaneMouseMove}
      onPaneMouseLeave={onPaneMouseLeave}
    />
  );
};

export default BasicFlow;
```
