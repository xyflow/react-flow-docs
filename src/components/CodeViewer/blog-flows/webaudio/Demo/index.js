import 'reactflow/dist/style.css';

import ReactFlow, { Controls, Panel, ReactFlowProvider } from 'reactflow';

import Amp from './nodes/amp';
import Dac from './nodes/dac';
import Osc from './nodes/osc';
import React from 'react';
import Sidebar from './components/sidebar';
import { shallow } from 'zustand/shallow';
import useStore from './store';

const nodeTypes = { osc: Osc, amp: Amp, dac: Dac };
const edgeTypes = {};

function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, addEdge } = useStore(
    (store) => ({
      nodes: store.nodes,
      edges: store.edges,
      onNodesChange: store.onNodesChange,
      onEdgesChange: store.onEdgesChange,
      addEdge: store.addEdge,
    }),
    shallow
  );

  return (
    <ReactFlow
      className="bg-gray-50"
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={addEdge}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView
      fitViewOptions={{
        padding: 0.75,
      }}
      proOptions={{ hideAttribution: true }}
    >
      <Panel position="top-right">
        <Sidebar />
      </Panel>

      <Panel position="top-left">
        <span className="font-mono text-gray-500 text-xs">
          <a href="https://reactflow.dev">React Flow</a> + Web Audio = 💕
        </span>
      </Panel>
    </ReactFlow>
  );
}

export default function Demo() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
