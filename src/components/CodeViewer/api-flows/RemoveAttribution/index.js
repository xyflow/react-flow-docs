import React from 'react';
import ReactFlow from 'react-flow-renderer';

import { nodes, edges } from './initialElements';

/**
 * This example demonstrates how you can remove the attribution from the React Flow renderer.
 * Please only hide the attribution if you are subscribed to React Flow Pro: https://pro.reactflow.dev
 */
function RemoveAttributionExample() {
  return (
    <ReactFlow
      proOptions={{ hideAttribution: true }}
      defaultNodes={nodes}
      defaultEdges={edges}
      fitView
    />
  );
}

export default RemoveAttributionExample;
