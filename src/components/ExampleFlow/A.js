import React from 'react';
import ReactFlow, { Background } from 'react-flow-renderer';

import { colors } from '../../theme/themes';

const nodeStyle = {
  backgroundColor: 'white',
  fontWeight: 'bold',
};

const nodes = [
  {
    id: 'Input',
    type: 'input',
    position: {
      x: 300,
      y: 100,
    },
    data: {
      label: 'Input Node',
    },
    style: { ...nodeStyle, border: `1px solid ${colors.blue['600']}` },
  },
  {
    id: 'Default1',
    position: {
      x: 100,
      y: 200,
    },
    data: {
      label: 'Default Node',
    },
    style: { ...nodeStyle, border: `1px solid ${colors.pink['600']}` },
  },
  {
    id: 'Default2',
    position: {
      x: 500,
      y: 200,
    },
    data: {
      label: 'Default Node',
    },
    style: { ...nodeStyle, border: `1px solid ${colors.pink['600']}` },
  },
  {
    id: 'Output2',
    position: {
      x: 300,
      y: 300,
    },
    data: {
      label: 'Output Node',
    },
    style: { ...nodeStyle, border: `1px solid ${colors.teal['600']}` },
    type: 'output',
  },
];

const edges = [
  {
    id: 'Input->Default1',
    source: 'Input',
    target: 'Default1',
    label: 'Default Edge',
  },
  {
    id: 'Input->Default2',
    source: 'Input',
    target: 'Default2',
    animated: true,
    label: 'Animated Edge',
  },
  {
    id: 'Default1->Output1',
    source: 'Default1',
    target: 'Output1',
  },
  {
    id: 'Default1->Output2',
    source: 'Default1',
    target: 'Output2',
    type: 'smoothstep',
    label: 'Step Edge',
  },
  {
    id: 'Default2->Output3',
    source: 'Default2',
    target: 'Output3',
    type: 'smoothstep',
  },
];

export default function ExampleFlow() {
  return (
    <ReactFlow
      preventScrolling={false}
      zoomOnScroll={false}
      hpreventScrolling={false}
      fitView
      defaultNodes={nodes}
      defaultEdges={edges}
    >
      <Background />
    </ReactFlow>
  );
}
