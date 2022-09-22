import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'onNodeClick',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user clicks a node',
  },
  {
    name: 'onNodeDragStart',
    type: 'function',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>, nodes:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Node drag start',
  },
  {
    name: 'onNodeDrag',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>, nodes:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Node drag',
  },
  {
    name: 'onNodeDragStop',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>, nodes:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Node drag stop',
  },
  {
    name: 'onNodeMouseEnter',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Node mouse enter',
  },
  {
    name: 'onNodeMouseMove',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Node mouse move',
  },
  {
    name: 'onNodeMouseLeave',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Node mouse leave',
  },
  {
    name: 'onNodeContextMenu',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Node context menu',
  },
  {
    name: 'onNodeDoubleClick',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Node double click',
  },
  {
    name: 'onNodesDelete',
    type: (
      <>
        (nodes: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when nodes get deleted',
  },
  {
    name: 'onNodesChange',
    type: <>(nodeChanges: NodeChange[]) =&gt; void</>,
    default: 'undefined',
    description: 'Handler for adding interactivity for a controlled flow',
  },
];

export default props;
