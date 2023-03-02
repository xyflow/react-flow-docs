import 'reactflow/dist/style.css';

import React from 'react';
import ReactFlow, { Panel } from 'reactflow';
import shallow from 'zustand/shallow';
import { useStore } from './store';

const selector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  addEdge: store.addEdge,
});

export default function App() {
  const { nodes, edges, onNodesChange, onEdgesChange, addEdge } = useStore(selector, shallow);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={addEdge}
    >
      <Panel position="top-right">{/* ... */}</Panel>
      <Panel position="top-left">
        <span className="font-mono text-gray-500 text-xs">
          <a href="https://reactflow.dev">React Flow</a> + Web Audio = 💕
        </span>
      </Panel>
    </ReactFlow>
  );
}
