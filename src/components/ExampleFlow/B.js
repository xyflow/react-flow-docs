import React, { useEffect } from 'react';
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
    id: 'react-flow-renderer',
    type: 'default',
    position: { x: 240, y: 0 },
    data: { label: 'react-flow-renderer' },
    style: { ...rootStyles },
  },
  {
    id: 'classcat',
    type: 'default',
    position: { x: 0, y: 100 },
    data: { label: 'classcat' },
    style: { ...leaveStyles },
  },
  {
    id: 'd3-zoom',
    type: 'default',
    position: { x: 40, y: 250 },
    data: { label: 'd3-zoom' },
    style: {
      width: 600,
      height: 200,
      ...parentStyles,
    },
  },
  {
    id: 'd3-selection',
    type: 'default',
    position: { x: 20, y: 50 },
    data: { label: 'd3-selection' },
    parentNode: 'd3-zoom',
    zIndex: 1,
    style: {
      ...leaveStyles,
    },
  },
  {
    id: 'd3-dispatch',
    type: 'default',
    position: { x: 220, y: 50 },
    data: { label: 'd3-dispatch' },
    extent: 'parent',
    parentNode: 'd3-zoom',
    style: {
      ...leaveStyles,
    },
  },
  {
    id: 'd3-drag',
    type: 'default',
    position: { x: 420, y: 50 },
    data: { label: 'd3-drag' },
    extent: 'parent',
    parentNode: 'd3-zoom',
    style: {
      ...leaveStyles,
    },
  },
  {
    id: 'd3-transition',
    type: 'default',
    position: { x: 320, y: 130 },
    data: { label: 'd3-transition' },
    extent: 'parent',
    parentNode: 'd3-zoom',
    style: {
      ...leaveStyles,
    },
  },
  {
    id: 'd3-interpolate',
    type: 'default',
    position: { x: 120, y: 130 },
    data: { label: 'd3-interpolate' },
    extent: 'parent',
    parentNode: 'd3-zoom',
    style: {
      ...leaveStyles,
    },
  },
  {
    id: 'react-draggable',
    type: 'default',
    position: { x: 370, y: 100 },
    data: { label: 'react-draggable' },
    style: {
      width: 190,
      height: 110,
      ...parentStyles,
    },
  },
  {
    id: 'clsx',
    type: 'default',
    position: { x: 20, y: 50 },
    data: { label: 'clsx' },
    extent: 'parent',
    parentNode: 'react-draggable',
    style: {
      ...leaveStyles,
    },
  },
  {
    id: 'zustand',
    type: 'default',
    position: { x: 600, y: 100 },
    data: { label: 'zustand' },
    style: {
      ...leaveStyles,
    },
  },
];

const edges = [
  { id: 'react-flow-renderer->classcat', source: 'react-flow-renderer', target: 'classcat' },
  {
    id: 'react-flow-renderer->d3-selection',
    source: 'react-flow-renderer',
    target: 'd3-selection',
  },
  { id: 'react-flow-renderer->d3-zoom', source: 'react-flow-renderer', target: 'd3-zoom' },
  {
    id: 'react-flow-renderer->react-draggable',
    source: 'react-flow-renderer',
    target: 'react-draggable',
  },
  {
    id: 'react-flow-renderer->zustand',
    source: 'react-flow-renderer',
    target: 'zustand',
  },
];

export default function ExampleFlow() {
  return (
    <ReactFlow
      defaultEdgeOptions={{ type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#f2f7ff' } }}
      preventScrolling={false}
      fitView
      defaultNodes={nodes}
      defaultEdges={edges}
    >
      <Background />
    </ReactFlow>
  );
}
