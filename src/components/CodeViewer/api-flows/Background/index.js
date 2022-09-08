import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

import defaultNodes from './nodes.js';
import defaultEdges from './edges.js';

function Flow() {
  return (
    <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} fitView>
      <Background />
    </ReactFlow>
  );
}

export default Flow;
