import ReactFlow from 'react-flow-renderer';

import defaultNodes from './nodes.js';
import defaultEdges from './edges.js';

const edgeOptions = {
  animated: true,
};

export default function Flow() {
  return (
    <ReactFlow
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      defaultEdgeOptions={edgeOptions}
      fitView
    />
  );
}
