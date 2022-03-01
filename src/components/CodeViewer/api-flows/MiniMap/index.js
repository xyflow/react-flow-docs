import ReactFlow, { MiniMap } from 'react-flow-renderer';

import defaultNodes from './nodes.js';
import defaultEdges from './edges.js';

function Flow() {
  return (
    <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} fitView>
      <MiniMap />
    </ReactFlow>
  );
}

export default Flow;
