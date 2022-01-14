import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Controls, Background } from 'react-flow-renderer';

import { getElements } from './utils.js';

const { nodes: initialNodes, edges: initialEdges } = getElements();

const EdgeTypesFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitViewOnInit
      minZoom={0.2}
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default EdgeTypesFlow;
