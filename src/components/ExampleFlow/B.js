import React from 'react';
import styled from '@emotion/styled';
import ReactFlowRenderer, { Background } from 'react-flow-renderer';
import { rgba } from '../../utils/css-utils';

const ReactFlow = styled(ReactFlowRenderer)`
  .react-flow__handle {
    width: 1px;
    height: 1px;
    opacity: 0;
    border: none;
  }
`;

const rootStyles = {
  backgroundColor: rgba('#CC005B', 0.8),
  border: '1px solid #FF0072',
  color: 'white',
  fontWeight: 'bold',
};

const parentStyles = {
  backgroundColor: rgba('#FF0072', 0.1),
  border: `1px solid #FF0072`,
  color: 'white',
  fontWeight: 'bold',
};

const leaveStyles = {
  backgroundColor: rgba('#CC005B', 0.8),
  border: '1px solid #FF0072',
  color: 'white',
  fontWeight: 'bold',
};

const nodes = [
  {
    id: 'Outer',
    type: 'input',
    position: { x: 160, y: 0 },
    data: { label: 'Outer Node' },
    style: { ...rootStyles },
  },
  {
    id: 'Parent',
    type: 'default',
    position: { x: 40, y: 100 },
    data: { label: 'Sub Flow' },
    style: {
      width: 380,
      height: 160,
      ...parentStyles,
    },
  },
  {
    id: 'Child1',
    type: 'default',
    position: { x: 20, y: 35 },
    data: { label: 'Child Node' },
    parentNode: 'Parent',
    zIndex: 1,
    style: {
      ...leaveStyles,
    },
  },
  {
    id: 'Child2',
    type: 'default',
    position: { x: 200, y: 35 },
    data: { label: 'Child Node' },
    extent: 'parent',
    parentNode: 'Parent',
    style: {
      ...leaveStyles,
    },
  },
  {
    id: 'Child3',
    type: 'default',
    position: { x: 110, y: 100 },
    data: { label: 'Child Node' },
    extent: 'parent',
    parentNode: 'Parent',
    style: {
      ...leaveStyles,
    },
  },
  {
    id: 'Outer2',
    type: 'output',
    position: { x: 155, y: 300 },
    data: { label: 'Outer Node' },
    style: { ...rootStyles },
  },
];

const edges = [
  { id: 'Outer->Child1', source: 'Outer', target: 'Child1' },
  { id: 'Parent->Outer2', source: 'Parent', target: 'Outer2' },
];

const defaultEdgeOptions = { type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#f2f7ff' } };

export default function ExampleFlow() {
  return (
    <ReactFlow
      defaultEdgeOptions={defaultEdgeOptions}
      preventScrolling={false}
      zoomOnScroll={false}
      fitView
      defaultNodes={nodes}
      defaultEdges={edges}
    >
      <Background />
    </ReactFlow>
  );
}
