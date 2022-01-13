import React from 'react';
import ReactFlow, { useNodesState, useEdgesState, Controls, updateEdge, addEdge } from 'react-flow-renderer';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Node A' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Node B' },
    position: { x: 100, y: 200 },
  },
  {
    id: '3',
    data: { label: 'Node C' },
    position: { x: 400, y: 200 },
  },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2', label: 'updatable edge' }];

const UpdatableEdge = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // gets called after end of edge gets dragged to another source or target
  const onEdgeUpdate = (oldEdge, newConnection) => setEdges((els) => updateEdge(oldEdge, newConnection, els));
  const onConnect = (params) => setEdges((els) => addEdge(params, els));

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      snapToGrid
      onEdgeUpdate={onEdgeUpdate}
      onConnect={onConnect}
      fitViewOnInit
    >
      <Controls />
    </ReactFlow>
  );
};

export default UpdatableEdge;
