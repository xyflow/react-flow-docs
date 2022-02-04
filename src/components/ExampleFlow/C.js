import React from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'react-flow-renderer';
import { rgba } from '../../utils/css-utils';

const defaultNodeOptions = {
  targetPosition: 'left',
  sourcePosition: 'right',
};

const nodes = [
  {
    id: 'input',
    position: {
      x: 50,
      y: 200,
    },
    data: {
      label: 'input',
    },
    type: 'input',
    style: {
      width: 80,
      backgroundColor: '#0050ff',
      borderColor: 'white',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'output',
    position: {
      x: 540,
      y: 200,
    },
    data: {
      label: 'output',
    },
    type: 'output',
    style: {
      width: 80,
      backgroundColor: '#ff2e8b',
      borderColor: 'white',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'A',
    position: {
      x: 200,
      y: 150,
    },
    data: {
      label: 'a',
    },
    style: {
      width: 70,
      backgroundColor: '#7a4be7',
      borderColor: 'white',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'B',
    position: {
      x: 300,
      y: 100,
    },
    data: {
      label: 'b',
    },
    style: {
      width: 70,
      backgroundColor: '#a845d0',
      borderColor: 'white',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'C',
    position: {
      x: 400,
      y: 150,
    },
    data: {
      label: 'c',
    },
    style: {
      width: 70,
      backgroundColor: '#ca3fb9',
      borderColor: 'white',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'D',
    position: {
      x: 200,
      y: 250,
    },
    data: {
      label: 'd',
    },
    style: {
      width: 70,
      backgroundColor: '#7a4be7',
      borderColor: 'white',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'E',
    position: {
      x: 300,
      y: 300,
    },
    data: {
      label: 'e',
    },
    style: {
      width: 70,
      backgroundColor: '#a845d0',
      borderColor: 'white',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'F',
    position: {
      x: 400,
      y: 250,
    },
    data: {
      label: 'f',
    },
    style: {
      width: 70,
      backgroundColor: '#ca3fb9',
      borderColor: 'white',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    ...defaultNodeOptions,
  },
];

const edges = [
  {
    id: 'e1',
    source: 'input',
    target: 'A',
    type: 'smoothstep',
  },
  {
    id: 'e2',
    source: 'A',
    target: 'B',
    type: 'smoothstep',
  },
  {
    id: 'e3',
    source: 'B',
    target: 'C',
    type: 'smoothstep',
  },
  {
    id: 'e4',
    source: 'C',
    target: 'output',
    type: 'smoothstep',
  },
  {
    id: 'e5',
    source: 'input',
    target: 'D',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'e6',
    source: 'D',
    target: 'E',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'e7',
    source: 'E',
    target: 'F',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'e8',
    source: 'F',
    target: 'output',
    type: 'smoothstep',
    animated: true,
  },
];

export default function ExampleFlow() {
  return (
    <ReactFlow
      defaultEdgeOptions={{ style: { strokeWidth: 2, stroke: '#BDC4CC' } }}
      preventScrolling={false}
      fitView
      defaultNodes={nodes}
      defaultEdges={edges}
    >
      <Background />
      <MiniMap
        nodeBorderRadius={8}
        nodeStrokeColor="#fff"
        nodeColor={({ id }) => nodes.find((n) => n.id === id).style.backgroundColor}
      />
      <Controls />
    </ReactFlow>
  );
}
