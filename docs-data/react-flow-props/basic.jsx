import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'nodes?',
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
    name: 'edges?',
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
    name: 'defaultNodes?',
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
    name: 'defaultEdges?',
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
    name: 'onNodesChange?',
    type: (
      <>
        (nodeChanges: <Link to="/docs/api/types/#nodechange">NodeChange</Link>[]) =&gt; void
      </>
    ),
    description:
      'Called on drag, select and remove - handler for adding interactivity for a controlled flow',
  },
  {
    name: 'onEdgesChange?',
    type: (
      <>
        (edgeChanges: <Link to="/docs/api/types/#edgechange">EdgeChange</Link>[]) =&gt; void
      </>
    ),
    description:
      'Called on select and remove - handler for adding interactivity for a controlled flow',
  },
  {
    name: 'onConnect?',
    type: (
      <>
        (connection: <Link to="/docs/api/types/#connection">Connection</Link>) =&gt; void
      </>
    ),
    description: 'Called when user connects two nodes in a controlled flow',
  },
  {
    name: 'nodeTypes?',
    type: '{ [key: string]: React.ComponentType<NodeProps> }',
    default: '{ input: InputNode, default: DefaultNode, output: OutputNode, group: GroupNode }',
    description: (
      <>
        Object with <Link to="/docs/api/nodes/node-types/">node types</Link>
      </>
    ),
  },
  {
    name: 'edgeTypes?',
    type: '{ [key: string]: React.ComponentType<EdgeProps> }',
    default:
      '{ default: BezierEdge, straight: StraightEdge, step: StepEdge, smoothstep: SmoothStepEdge }',
    description: (
      <>
        Object with <Link to="/docs/api/edges/edge-types/">edge types</Link>
      </>
    ),
  },
  {
    name: 'nodeOrigin?',
    type: '[number, number]',
    default: '[0,0]',
    description: (
      <>
        Position origin [x-origin, y-origin]. center = <code>[0.5, 0.5]</code>, bottom-right ={' '}
        <code>[1, 1]</code>. Values should be between <code>0</code> and <code>1</code>.
      </>
    ),
  },
  {
    name: 'nodeDragThreshold?',
    type: 'number',
    default: '0',
    description: (
      <>
        With a threshold greater than zero you can delay node drag events. If threshold equals 1,
        you need to drag the node 1 pixel before a drag event is fired.
      </>
    ),
  },
  {
    name: 'style?',
    type: 'CSSProperties',
    description: 'CSS properties for the wrapper div',
  },
  {
    name: 'className?',
    type: 'string',
    description: 'Additional class name for the wrapper div',
  },
];

export default props;
