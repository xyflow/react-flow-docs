import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'nodes',
    type: (
      <>
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]
      </>
    ),
    default: '[]',
    description: (
      <>
        Array of <Link to="/docs/api/nodes/node-options">nodes</Link> (for a controlled flow)
      </>
    ),
  },
  {
    name: 'edges',
    type: (
      <>
        <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]
      </>
    ),
    default: '[]',
    description: (
      <>
        Array of <Link to="/docs/api/edges/edge-options">edges</Link> (for a controlled flow)
      </>
    ),
  },
  {
    name: 'defaultNodes',
    type: (
      <>
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]
      </>
    ),
    default: '[]',
    description: (
      <>
        Array of <Link to="/docs/api/nodes/node-options">nodes</Link> (for an uncontrolled flow)
      </>
    ),
  },
  {
    name: 'defaultEdges',
    type: (
      <>
        <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]
      </>
    ),
    default: '[]',
    description: (
      <>
        Array of <Link to="/docs/api/edges/edge-options">edges</Link> (for an uncontrolled flow)
      </>
    ),
  },
  {
    name: 'onNodesChange',
    type: (
      <>
        (nodeChanges: <Link to="/docs/api/types/#nodechange">NodeChange</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description:
      'Called on drag, select and remove - handler for adding interactivity for a controlled flow',
  },
  {
    name: 'onEdgesChange',
    type: (
      <>
        (edgeChanges: <Link to="/docs/api/types/#edgechange">EdgeChange</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description:
      'Called on select and remove - handler for adding interactivity for a controlled flow',
  },
  {
    name: 'onConnect',
    type: (
      <>
        (connection: <Link to="/docs/api/types/#connection">Connection</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user connects two nodes in a controlled flow',
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
        Object with <Link to="/docs/api/edges/edge-types/">edge types</Link>
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
