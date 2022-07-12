import React, { useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';

import ButtonEdge from './ButtonEdge.js';

const initialNodes = [
  {
    id: 'ewb-1',
    type: 'input',
    data: { label: 'Input 1' },
    position: { x: 250, y: 0 },
  },
  { id: 'ewb-2', data: { label: 'Node 2' }, position: { x: 250, y: 300 } },
];

const initialEdges = [
  {
    id: 'edge-1-2',
    source: 'ewb-1',
    target: 'ewb-2',
    type: 'buttonedge',
  },
];

const edgeTypes = {
  buttonedge: ButtonEdge,
};

const EdgeWithButtonFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: 'buttonedge' }, eds)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      snapToGrid={true}
      edgeTypes={edgeTypes}
      fitView
      attributionPosition="top-right"
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default EdgeWithButtonFlow;
