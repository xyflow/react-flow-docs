import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'onEdgeClick',
    type: (
      <>
        (event: React.MouseEvent, edge:{' '}
        <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user clicks an edge',
  },
  {
    name: 'onEdgeMouseEnter',
    type: (
      <>
        (event: React.MouseEvent, edge:{' '}
        <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Edge mouse enter',
  },
  {
    name: 'onEdgeMouseMove',
    type: (
      <>
        (event: React.MouseEvent, edge:{' '}
        <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Edge mouse move',
  },
  {
    name: 'onEdgeMouseLeave',
    type: (
      <>
        (event: React.MouseEvent, edge:{' '}
        <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Edge mouse leave',
  },
  {
    name: 'onEdgeContextMenu',
    type: (
      <>
        (event: React.MouseEvent, edge:{' '}
        <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user does a right-click on an edge',
  },
  {
    name: 'onEdgeUpdate',
    type: (
      <>
        (oldEdge: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>, newConnection:{' '}
        <Link to="/docs/api/types/#connection">Connection</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when the end of an edge gets dragged to another source or target',
  },
  {
    name: 'onEdgeUpdateStart',
    type: (
      <>
        (event: React.MouseEvent, edge:{' '}
        <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>, handleType:{' '}
        <Link to="/docs/api/types/#handletype">HandleType</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user starts to update an edge',
  },
  {
    name: 'onEdgeUpdateEnd',
    type: (
      <>
        (event: React.MouseEvent, edge:{' '}
        <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>, handleType:{' '}
        <Link to="/docs/api/types/#handletype">HandleType</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description:
      'Called when user ends an edge update (for TS users: this is a normal MouseEvent and not a React.MouseEvent like the other ones).',
  },
  {
    name: 'onEdgesDelete',
    type: (
      <>
        (edges: <Link to="/docs/api/edges/edge-options/#typescript">Edge</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when edges get deleted',
  },
  {
    name: 'onEdgesChange',
    type: (
      <>
        (edgeChanges: <Link to="/docs/api/types/#edgechange">EdgeChange</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Handler for adding interactivity for a controlled flow',
  },
];

export default props;
