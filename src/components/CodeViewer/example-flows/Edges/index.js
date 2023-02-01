import React, { useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomEdge from './CustomEdge';

const initialNodes = [
  {
    id: 'node-1',
    type: 'input',
    data: { label: 'Input 1' },
    position: { x: 250, y: 0 },
  },
  { id: 'node-2', data: { label: 'Node 2' }, position: { x: 150, y: 100 } },
  { id: 'node-2a', data: { label: 'Node 2a' }, position: { x: 0, y: 180 } },
  { id: 'node-3', data: { label: 'Node 3' }, position: { x: 250, y: 200 } },
  { id: 'node-4', data: { label: 'Node 4' }, position: { x: 400, y: 300 } },
  { id: 'node-3a', data: { label: 'Node 3a' }, position: { x: 150, y: 300 } },
  { id: 'node-5', data: { label: 'Node 5' }, position: { x: 250, y: 400 } },
  {
    id: 'node-6',
    type: 'output',
    data: { label: 'Output 6' },
    position: { x: 50, y: 550 },
  },
  {
    id: 'node-7',
    type: 'output',
    data: { label: 'Output 7' },
    position: { x: 250, y: 550 },
  },
  {
    id: 'node-8',
    type: 'output',
    data: { label: 'Output 8' },
    position: { x: 525, y: 600 },
  },
];

const initialEdges = [
  {
    id: 'edge-1-2',
    source: 'node-1',
    target: 'node-2',
    label: 'bezier edge (default)',
    className: 'normal-edge',
  },
  {
    id: 'edge-2-2a',
    source: 'node-2',
    target: 'node-2a',
    type: 'smoothstep',
    label: 'smoothstep edge',
  },
  {
    id: 'edge-2-3',
    source: 'node-2',
    target: 'node-3',
    type: 'step',
    label: 'step edge',
  },
  {
    id: 'edge-3-4',
    source: 'node-3',
    target: 'node-4',
    type: 'straight',
    label: 'straight edge',
  },
  {
    id: 'edge-3-3a',
    source: 'node-3',
    target: 'node-3a',
    type: 'straight',
    label: 'label only edge',
    style: { stroke: 'none' },
  },
  {
    id: 'edge-3-5',
    source: 'node-4',
    target: 'node-5',
    animated: true,
    label: 'animated styled edge',
    style: { stroke: 'red' },
  },
  {
    id: 'edge-5-6',
    source: 'node-5',
    target: 'node-6',
    label: 'styled label',
    labelStyle: { fill: 'red', fontWeight: 700 },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: 'edge-5-7',
    source: 'node-5',
    target: 'node-7',
    label: 'label with styled bg',
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'edge-5-8',
    source: 'node-5',
    target: 'node-8',
    type: 'custom',
    data: { text: 'custom edge' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

const edgeTypes = {
  custom: CustomEdge,
};

const EdgesFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      snapToGrid={true}
      edgeTypes={edgeTypes}
      fitView
      attributionPosition="top-right"
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default EdgesFlow;
