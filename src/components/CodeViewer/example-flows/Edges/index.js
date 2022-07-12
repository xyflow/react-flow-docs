import React, { useCallback } from 'react';

import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
  MarkerType,
} from 'react-flow-renderer';

import CustomEdge from './CustomEdge';

const initialNodes = [
  {
    id: 'edges-1',
    type: 'input',
    data: { label: 'Input 1' },
    position: { x: 250, y: 0 },
  },
  { id: 'edges-2', data: { label: 'Node 2' }, position: { x: 150, y: 100 } },
  { id: 'edges-2a', data: { label: 'Node 2a' }, position: { x: 0, y: 180 } },
  { id: 'edges-3', data: { label: 'Node 3' }, position: { x: 250, y: 200 } },
  { id: 'edges-4', data: { label: 'Node 4' }, position: { x: 400, y: 300 } },
  { id: 'edges-3a', data: { label: 'Node 3a' }, position: { x: 150, y: 300 } },
  { id: 'edges-5', data: { label: 'Node 5' }, position: { x: 250, y: 400 } },
  {
    id: 'edges-6',
    type: 'output',
    data: { label: 'Output 6' },
    position: { x: 50, y: 550 },
  },
  {
    id: 'edges-7',
    type: 'output',
    data: { label: 'Output 7' },
    position: { x: 250, y: 550 },
  },
  {
    id: 'edges-8',
    type: 'output',
    data: { label: 'Output 8' },
    position: { x: 525, y: 600 },
  },
];

const initialEdges = [
  {
    id: 'edges-e1-2',
    source: 'edges-1',
    target: 'edges-2',
    label: 'bezier edge (default)',
    className: 'normal-edge',
  },
  {
    id: 'edges-e2-2a',
    source: 'edges-2',
    target: 'edges-2a',
    type: 'smoothstep',
    label: 'smoothstep edge',
  },
  {
    id: 'edges-e2-3',
    source: 'edges-2',
    target: 'edges-3',
    type: 'step',
    label: 'step edge',
  },
  {
    id: 'edges-e3-4',
    source: 'edges-3',
    target: 'edges-4',
    type: 'straight',
    label: 'straight edge',
  },
  {
    id: 'edges-e3-3a',
    source: 'edges-3',
    target: 'edges-3a',
    type: 'straight',
    label: 'label only edge',
    style: { stroke: 'none' },
  },
  {
    id: 'edges-e3-5',
    source: 'edges-4',
    target: 'edges-5',
    animated: true,
    label: 'animated styled edge',
    style: { stroke: 'red' },
  },
  {
    id: 'edges-e5-6',
    source: 'edges-5',
    target: 'edges-6',
    label: 'styled label',
    labelStyle: { fill: 'red', fontWeight: 700 },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: 'edges-e5-7',
    source: 'edges-5',
    target: 'edges-7',
    label: 'label with styled bg',
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'edges-e5-8',
    source: 'edges-5',
    target: 'edges-8',
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
