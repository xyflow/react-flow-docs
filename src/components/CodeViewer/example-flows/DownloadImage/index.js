import React, { useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';
import html2canvas from 'html2canvas';

import CustomNode from './CustomNode';

import './index.css';

const connectionLineStyle = { stroke: '#ffff' };
const snapGrid = [25, 25];
const nodeTypes = {
  custom: CustomNode,
};

const initNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: '▲' },
    position: { x: 0, y: 50 },
    sourcePosition: 'right',
    style: {
      backgroundColor: '#BEE3F8',
    },
  },
  {
    id: '2',
    type: 'custom',
    data: {},
    position: { x: 200, y: 50 },
    style: {
      backgroundColor: '#90CDF4',
    },
  },
  {
    id: '3',
    data: { label: '▲' },
    position: { x: 400, y: 0 },
    targetPosition: 'left',
    sourcePosition: 'right',
    style: {
      backgroundColor: '#63B3ED',
    },
  },
  {
    id: '4',
    data: { label: '▲' },
    position: { x: 400, y: 100 },
    targetPosition: 'left',
    sourcePosition: 'right',
    style: {
      backgroundColor: '#63B3ED',
    },
  },
  {
    id: '5',
    type: 'output',
    data: { label: '▲' },
    position: { x: 600, y: 0 },
    targetPosition: 'left',
    style: {
      backgroundColor: '#4299E1',
    },
  },
  {
    id: '6',
    type: 'output',
    data: { label: '▲' },
    position: { x: 600, y: 100 },
    targetPosition: 'left',
    style: {
      backgroundColor: '#4299E1',
    },
  },
];

const initEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e2a-3',
    source: '2',
    target: '3',
    sourceHandle: 'a',
  },
  {
    id: 'e2b-4',
    source: '2',
    target: '4',
    sourceHandle: 'b',
  },
  {
    id: 'e3a-5',
    source: '3',
    target: '5',
  },
  {
    id: 'e4b-6',
    source: '4',
    target: '6',
  },
];

function download(canvas) {
  const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  const a = document.createElement('a');

  a.setAttribute('download', 'reactflow.png');
  a.setAttribute('href', image);
  a.click();

  canvas.remove();
}

const defaultEdgeOptions = {
  animated: true,
  type: 'smoothstep',
};

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onClick = () => {
    html2canvas(document.querySelector('.react-flow'), {
      ignoreElements: (element) => {
        if (
          element.classList.contains('react-flow__minimap') ||
          element.classList.contains('react-flow__controls')
        ) {
          return true;
        }

        return false;
      },
    }).then((canvas) => {
      download(canvas);
    });
  };

  return (
    <div className="wrapper">
      <button className="download-btn" onClick={onClick}>
        Download Image
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultZoom={1.5}
        fitView
        attributionPosition="bottom-left"
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <MiniMap nodeColor="#90CDF4" />
        <Controls />
        <Background gap={25} />
      </ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;
