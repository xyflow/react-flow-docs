import 'reactflow/dist/style.css';

import React from 'react';
import ReactFlow from 'reactflow';
import defaultEdges from './edges.js';
import defaultNodes from './nodes.js';

const edgeOptions = {
  animated: true,
  style: {
    stroke: '#ff0072',
  },
};

export default function BasicWebAudioFlow() {
  return (
    <ReactFlow
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      defaultEdgeOptions={edgeOptions}
      fitView
    />
  );
}
