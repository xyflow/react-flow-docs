import React from 'react';

import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'react-flow-renderer';

import initialNodes from './nodes.js';
import initialEdges from './edges.js';

const EdgesFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      snapToGrid={true}
      fitView
      attributionPosition="top-right"
    />
  );
};

export default EdgesFlow;
