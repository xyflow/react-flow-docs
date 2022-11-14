import { useEffect, useState } from 'react';
import ReactFlow, { Controls, Background, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

import createLayout from './layout';

function Flow() {
  const [graph, setGraph] = useState(null);

  useEffect(() => {
    (async () => {
      const { nodes, edges } = await createLayout();
      setGraph({ nodes, edges });
    })();
  }, []);

  return (
    <div style={{ height: '100%' }}>
      {graph && (
        <ReactFlow
          defaultNodes={graph.nodes}
          defaultEdges={graph.edges}
          fitView
          defaultEdgeOptions={{ type: 'smoothstep' }}
        >
          <Background />
          <Controls />
        </ReactFlow>
      )}
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
