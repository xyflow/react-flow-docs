import React, { useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
} from 'react-flow-renderer';

import DownloadButton from './DownloadButton';
import CustomNode from './CustomNode';
import { initialNodes, initialEdges } from './nodes-edges';

import './index.css';

const connectionLineStyle = { stroke: '#ffff' };
const snapGrid = [25, 25];
const nodeTypes = {
  custom: CustomNode,
};

const defaultEdgeOptions = {
  animated: true,
  type: 'smoothstep',
};

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div className="wrapper" id="download-image">
      <DownloadButton />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        connectionLineType="smoothstep"
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultZoom={1.5}
        fitView
        attributionPosition="bottom-left"
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <Controls />
        <Background gap={25} />
      </ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;
