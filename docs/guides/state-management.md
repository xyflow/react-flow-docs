---
title: Using a State Management Library
sidebar_position: 5
---

:::info
For this guide we assume that you already know about the [core concepts](/docs/concepts/core-concepts/) of React Flow and how to implement [custom nodes](/docs/guides/custom-nodes/). You should also be familiar with the concepts of state management libraries and how to use them.
:::

In this guide we are explaining how you could use React Flow with the state management library [Zustand](https://github.com/pmndrs/zustand). We will build a little app where every node has a color chooser that updates its background color. In this guide we are are using Zustand, because we are already using it internally for React Flow, but of course you can use any other library like [Redux](https://redux.js.org/), [Recoil](https://recoiljs.org/) or [Jotai](https://jotai.org/) as well.

As you might have seen in the previous guides and examples, React Flow can easily be used with a local state for handling the nodes and edges of your diagram. When your app grows and you want to alter your state from within your nodes for example, things can easily get more complex. To avoid passing down functions through the node data field, you could use a [React context](https://reactjs.org/docs/context.html) or add a state management library as explained in this guide.

## Install Zustand

As mentioned above we are using Zustand in this example. Zustand is a bit like Redux: you have a central store with actions to alter your state and hooks to access your state. You can install Zustand via:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install --save zustand
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add zustand
```

  </TabItem>
    <TabItem value="pnpm" label="pnpm">

```bash
pnpm add zustand
```

  </TabItem>
</Tabs>

## Create a Store

Zustand lets you create a hook for accessing the store easily. We put our `nodes` and `edges` and the `onNodesChange`, `onEdgesChange` and `onConnect` functions in the store in order to get the basic interactivity for our graph:

import CodeViewer from '/src/components/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer activeFile="store.ts" codePath="api-flows/StateManagement" applyStyles={false} options={editorOptions} additionalFiles={['store.ts', 'nodes.ts', 'edges.ts']} isTypescript />

That's the basic setup. We now have a store with the nodes and edges that can handle the changes triggered by React Flow. When you take a look at the `App.tsx` file, you can see that it's kept nice and clean. All the data and actions are now part of the store and can easily be accessed with the `useStore` hook.

## Implement a Color Change Action

We add a new `updateNodeColor` action to update the `data.color` field of a specific node. For this we pass the node id and the new color to the action, iterate over the nodes and update the matching one with the new color:

```ts
updateNodeColor: (nodeId: string, color: string) => {
  set({
    nodes: get().nodes.map((node) => {
      if (node.id === nodeId) {
        // it's important to create a new object here, to inform React Flow about the changes
        node.data = { ...node.data, color };
      }

      return node;
    }),
  });
};
```

This new action can now be used in a React component like this:

```tsx
const updateNodeColor = useStore((s) => s.updateNodeColor);
...
<button onClick={() => updateNodeColor(nodeId, color)} />;
```

## Add a Color Chooser Node

In this last step we implement the `ColorChooserNode` component and call the `updateNodeColor` when the user changes the color. The custom part of the color chooser node is the color input.

```jsx
<input
  type="color"
  defaultValue={data.color}
  onChange={(evt) => updateNodeColor(id, evt.target.value)}
  className="nodrag"
/>
```

We add the `nodrag` class name so that the user doesn't drag the node by mistake when changing the color and call the `updateNodeColor` in the `onChange` event handler.

<CodeViewer activeFile="ColorChooserNode.tsx" codePath="api-flows/StateManagement2" applyStyles={false} options={editorOptions} additionalFiles={[ 'ColorChooserNode.tsx', 'store.ts', 'nodes.ts', 'edges.ts']} isTypescript />

You can now click on a color chooser and change the background of a node.
