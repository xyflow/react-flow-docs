import React from 'react';
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'react-flow-renderer';

import FloatingEdge from './FloatingEdge.js';
import FloatingConnectionLine from './FloatingConnectionLine.js';
import { createNodesAndEdges } from './utils.js';

import './index.css';

const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges();

const edgeTypes = {
  floating: FloatingEdge,
};

const NodeAsHandleFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) =>
    setEdges((eds) =>
      addEdge({ ...params, type: 'floating', markerEnd: { type: MarkerType.Arrow } }, eds)
    );

  return (
    <div className="floatingedges">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        edgeTypes={edgeTypes}
        connectionLineComponent={FloatingConnectionLine}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default NodeAsHandleFlow;
