import React from 'react';
import ReactFlow, { Background } from 'react-flow-renderer';
import { rgba } from '../../utils/css-utils';

const nodes = [
  {
    id: 'ReactFlow',
    type: 'input',
    position: {
      x: 300,
      y: 100,
    },
    data: {
      label: 'ReactFlow',
    },
    style: {
      backgroundColor: '#FF0072',
      border: '1px solid #CC005B',
      color: 'white',
      fontWeight: 'bold',
    },
  },
  {
    id: 'NodeRenderer',
    position: {
      x: 100,
      y: 200,
    },
    data: {
      label: 'NodeRenderer',
    },
    style: {
      backgroundColor: '#FF5CA5',
      border: '1px solid #FF0072',
      fontWeight: 'bold',
    },
  },
  {
    id: 'EdgeRenderer',
    position: {
      x: 500,
      y: 200,
    },
    data: {
      label: 'EdgeRenderer',
    },
    style: {
      backgroundColor: '#FF5CA5',
      border: '1px solid #FF0072',
      fontWeight: 'bold',
    },
  },
  {
    id: 'NodeComponent',
    position: {
      x: 100,
      y: 300,
    },
    data: {
      label: 'NodeComponent',
    },
    style: {
      backgroundColor: '#FF8ABE',
      border: '1px solid #FF5CA5',
      fontWeight: 'bold',
    },
  },
  {
    id: 'EdgeComponent',
    position: {
      x: 500,
      y: 300,
    },
    data: {
      label: 'EdgeComponent',
    },
    style: {
      backgroundColor: '#FF8ABE',
      border: '1px solid #FF5CA5',
      fontWeight: 'bold',
    },
  },
  {
    id: 'ConnectionLine',
    position: {
      x: 300,
      y: 300,
    },
    data: {
      label: 'ConnectionLine',
    },
    style: {
      backgroundColor: '#FF8ABE',
      border: '1px solid #FF5CA5',
      fontWeight: 'bold',
    },
    type: 'output',
  },
  {
    id: 'MarkerDefinitions',
    position: {
      x: 700,
      y: 300,
    },
    data: {
      label: 'MarkerDefinitions',
    },
    style: {
      backgroundColor: '#FF8ABE',
      border: '1px solid #FF5CA5',
      fontWeight: 'bold',
    },
  },
  {
    id: 'Node',
    position: {
      x: 0,
      y: 400,
    },
    data: {
      label: 'Node',
    },
    style: {
      backgroundColor: '#FFB8D8',
      border: '1px solid #FF8ABE',
      fontWeight: 'bold',
    },
    type: 'output',
  },
  {
    id: 'Handle',
    position: {
      x: 200,
      y: 400,
    },
    data: {
      label: 'Handle',
    },
    style: {
      backgroundColor: '#FFB8D8',
      border: '1px solid #FF8ABE',
      fontWeight: 'bold',
    },
    type: 'output',
  },
  {
    id: 'Edge',
    position: {
      x: 500,
      y: 400,
    },
    data: {
      label: 'Edge',
    },
    style: {
      backgroundColor: '#FFB8D8',
      border: '1px solid #FF8ABE',
      fontWeight: 'bold',
    },
    type: 'output',
  },
  {
    id: 'Marker',
    position: {
      x: 700,
      y: 400,
    },
    data: {
      label: 'Marker',
    },
    style: {
      backgroundColor: '#FFB8D8',
      border: '1px solid #FF8ABE',
      fontWeight: 'bold',
    },
    type: 'output',
  },
];

const edges = [
  {
    id: 'ReactFlow->EdgeRenderer',
    source: 'ReactFlow',
    target: 'EdgeRenderer',
    label: 'Default Edge',
  },
  {
    id: 'ReactFlow->NodeRenderer',
    source: 'ReactFlow',
    target: 'NodeRenderer',
    animated: true,
    label: 'Animated Edge',
  },
  {
    id: 'NodeRenderer->NodeComponent',
    source: 'NodeRenderer',
    target: 'NodeComponent',
  },
  {
    id: 'EdgeRenderer->EdgeComponent',
    source: 'EdgeRenderer',
    target: 'EdgeComponent',
    type: 'smoothstep',
  },
  {
    id: 'EdgeRenderer->ConnectionLine',
    source: 'EdgeRenderer',
    target: 'ConnectionLine',
    type: 'smoothstep',
    label: 'Step Edge',
  },
  {
    id: 'EdgeRenderer->MarkerDefinitions',
    source: 'EdgeRenderer',
    target: 'MarkerDefinitions',
    type: 'smoothstep',
  },
  {
    id: 'NodeComponent->Node',
    source: 'NodeComponent',
    target: 'Node',
  },
  {
    id: 'NodeComponent->Handle',
    source: 'NodeComponent',
    target: 'Handle',
  },
  {
    id: 'EdgeComponent->Edge',
    source: 'EdgeComponent',
    target: 'Edge',
  },
  {
    id: 'MarkerDefinitions->Marker',
    source: 'MarkerDefinitions',
    target: 'Marker',
  },
];

export default function ExampleFlow() {
  return (
    <ReactFlow hpreventScrolling={false} fitView defaultNodes={nodes} defaultEdges={edges}>
      <Background />
    </ReactFlow>
  );
}
