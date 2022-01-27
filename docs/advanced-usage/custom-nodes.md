---
title: Custom Nodes
sidebar_position: 1
---

A powerful feature of React Flow are custom nodes. With custom nodes you can do everything you want within your nodes. You can define multiple input and output handles and render form inputs or charts inside your custom node for example. In this section we will implement a node with an input field that updates some text on another part of the application.

## Implement the Custom Node

A custom node is a React component that gets wrapped for you in order to get the basic functionality as selecting or dragging like a built-in node. More over we are passing props like the position or the data object of the node besides [other props](/docs/api/nodes/custom-nodes#prop-types). Let's start to implement the `TextUpdaterNode` component:

```jsx
import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  );
}
```

## Add the New Node Type

You can add a new node type to React Flow by using the `nodeTypes` prop. It's important that the node types you pass are memoized or defined outside of the component. Otherwise React creates a new nodeTypes object on every render and this leads to performance issues and bugs.

```jsx
const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

return <ReactFlow nodeTypes={nodeTypes} />;
```

After defining your new node type, you can use it by using the `type` node option:

```js
const nodes = [{ id: 'a', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } }];
```

Putting all together we get a flow with a custom node that prints text to the console:

import CodeViewer from '/src/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/CustomNode" applyStyles={false} options={editorOptions} additionalFiles={['TextUpdaterNode.js']} />
