import { useEffect, useState } from 'react';
import ReactFlow, { Controls, Background, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

import { nodes, edges } from './layout';

function Flow() {
  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        defaultNodes={nodes}
        defaultEdges={edges}
        fitView
        defaultEdgeOptions={{ type: 'smoothstep' }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
