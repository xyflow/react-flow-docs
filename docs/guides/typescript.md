---
title: Usage with Typescript
sidebar_position: 4
---

React Flow is written in Typescript, so you don't need to install the types separately. In this section we setup a basic flow with regarding types.

## Usage

```tsx
import ReactFlow, {
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection
} from 'react-flow-renderer';

const initialNodes: Node[] = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 5, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 5, y: 100 } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2'},
];

const fitViewOptions: FitViewOptions = {
  padding: 0.2
}

function Flow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      fitView
      fitViewOptions={fitViewOptions}
    >
  )
}
```

## Custom Nodes

When you are working with [custom nodes](/docs/api/nodes/custom-nodes) you can define the data type by passsing a parameter:

```ts
import { Node } from 'react-flow-renderer';

type CustomNodeData = {
  value: number;
};

type CustomNode = Node<CustomNodeData>;
```
