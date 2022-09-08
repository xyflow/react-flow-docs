import React from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

import useStore from './store';
import ColorChooserNode from './ColorChooserNode';

const nodeTypes = { colorChooser: ColorChooserNode };

function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    />
  );
}

export default Flow;
