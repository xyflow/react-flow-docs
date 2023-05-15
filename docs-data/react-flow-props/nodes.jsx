import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'onNodeClick?',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    description: 'Called when user clicks a node',
  },
  {
    name: 'onNodeDragStart?',
    type: 'function',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>, nodes:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    description: 'Node drag start',
  },
  {
    name: 'onNodeDrag?',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>, nodes:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    description: 'Node drag',
  },
  {
    name: 'onNodeDragStop?',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>, nodes:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    description: 'Node drag stop',
  },
  {
    name: 'onNodeMouseEnter?',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    description: 'Node mouse enter',
  },
  {
    name: 'onNodeMouseMove?',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    description: 'Node mouse move',
  },
  {
    name: 'onNodeMouseLeave?',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    description: 'Node mouse leave',
  },
  {
    name: 'onNodeContextMenu?',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    description: 'Node context menu',
  },
  {
    name: 'onNodeDoubleClick?',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    description: 'Node double click',
  },
  {
    name: 'onNodesDelete?',
    type: (
      <>
        (nodes: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    description: 'Called when nodes get deleted',
  },
  {
    name: 'onNodesChange?',
    type: (
      <>
        (nodeChanges: <Link to="/docs/api/types/#nodechange">NodeChange</Link>[]) =&gt; void
      </>
    ),
    description: 'Handler for adding interactivity for a controlled flow',
  },
];

export default props;
