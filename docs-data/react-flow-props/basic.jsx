import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'nodes',
    type: 'Node[]',
    default: '[]',
    description: (
      <>
        Array of <Link to="/docs/api/nodes/node-options">nodes</Link> (for a controlled flow)
      </>
    ),
  },
  {
    name: 'edges',
    type: 'Edge[]',
    default: '[]',
    description: (
      <>
        Array of <Link to="/docs/api/nodes/edge-options">edges</Link> (for a controlled flow)
      </>
    ),
  },
  {
    name: 'defaultNodes',
    type: 'Node[]',
    default: '[]',
    description: (
      <>
        Array of <Link to="/docs/api/nodes/node-options">nodes</Link> (for an uncontrolled flow)
      </>
    ),
  },
  {
    name: 'defaultEdges',
    type: 'Edge[]',
    default: '[]',
    description: (
      <>
        Array of <Link to="/docs/api/nodes/edge-options">edges</Link> (for an uncontrolled flow)
      </>
    ),
  },
  {
    name: 'onNodesChange(nodeChanges)',
    type: 'function',
    default: 'undefined',
    description:
      'Called on drag, select and remove - handler for adding interactivity for a controlled flow',
  },
  {
    name: 'onEdgesChange(edgeChanges)',
    type: 'function',
    default: 'undefined',
    description:
      'Called on select and remove - handler for adding interactivity for a controlled flow',
  },
  {
    name: 'onConnect({ source, target }: Connection)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user connects two nodes in a controlled',
  },
  {
    name: 'nodeTypes',
    type: 'object',
    default: '{ input: InputNode, default: DefaultNode, output: OutputNode, group: GroupNode }',
    description: (
      <>
        Object with <Link to="/docs/api/nodes/node-types/">node types</Link>
      </>
    ),
  },
  {
    name: 'edgeTypes',
    type: 'object',
    default:
      '{ default: BezierEdge, straight: StraightEdge, step: StepEdge, smoothstep: SmoothStepEdge }',
    description: (
      <>
        Object with <Link to="/docs/api/nodes/edge-types/">edge types</Link>
      </>
    ),
  },
  {
    name: 'nodeOrigin',
    type: '[number, number] (number between 0 - 1)',
    default: '[0,0]}',
    description: (
      <>
        Position origin [x-origin, y-origin]. center = <code>[0.5, 0.5]</code>, bottom-right ={' '}
        <code>[1, 1]</code>
      </>
    ),
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'CSS properties for the wrapper div',
  },
  {
    name: 'className',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name for the wrapper div',
  },
];

export default props;
