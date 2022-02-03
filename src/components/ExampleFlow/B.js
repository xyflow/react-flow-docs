import React from 'react';
import ReactFlow, { Background } from 'react-flow-renderer';

const nodes = [
  {
    id: '1',
    type: 'input',
    position: {
      x: 200,
      y: 5,
    },
    data: {
      label: 'Input',
    },
  },
  {
    id: '2',
    position: {
      x: 0,
      y: 150,
    },
    data: {
      label: 'Default',
    },
  },
  {
    id: '3',
    position: {
      x: 400,
      y: 150,
    },
    data: {
      label: 'Default',
    },
  },
  {
    id: '4',
    type: 'output',
    position: {
      x: 200,
      y: 300,
    },
    data: {
      label: 'Output',
    },
  },
];

const edges = [
  {
    id: 'e1',
    source: '1',
    target: '2',
    label: 'default edge',
  },
  {
    id: 'e2',
    source: '1',
    target: '3',
    animated: true,
    label: 'animated edge',
  },
  {
    id: 'e3',
    source: '2',
    target: '4',
    type: 'smoothstep',
  },
  {
    id: 'e4',
    source: '3',
    target: '4',
    type: 'smoothstep',
  },
];

export default function ExampleFlow() {
  return (
    <ReactFlow preventScrolling={false} fitView defaultNodes={nodes} defaultEdges={edges}>
      <Background />
    </ReactFlow>
  );
}
