import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'onConnect?',
    type: (
      <>
        (connection: <Link to="/docs/api/types/#connection">Connection</Link>) =&gt; void
      </>
    ),
    description: 'Called when user connects two nodes',
  },
  {
    name: 'onConnectStart?',
    type: (
      <>
        (event: React.MouseEvent, params:{' '}
        <Link to="/docs/api/types/#onconnectstartparams">OnConnectStartParams</Link>) =&gt; void
      </>
    ),
    description: 'Called when user starts to drag connection line',
  },
  {
    name: 'onConnectEnd?',
    type: <>(event: React.MouseEvent) =&gt; void</>,
    description: 'Called after user stops or connects nodes (called after onConnect)',
  },
  {
    name: 'onClickConnectStart?',
    type: (
      <>
        (event: React.MouseEvent, params:{' '}
        <Link to="/docs/api/types/#onconnectstartparams">OnConnectStartParams</Link>) =&gt; void
      </>
    ),
    description: 'Called when user starts to do a connection by click',
  },
  {
    name: 'onClickConnectEnd?',
    type: <>(event: React.MouseEvent) =&gt; void</>,
    description: 'Called after user stops a connection by click (called after onConnect)',
  },
  {
    name: 'isValidConnection',
    type: (
      <>
        (edge: <Link to="/docs/api/edges/edge-options/#edge">Edge</Link>) =&gt; boolean
      </>
    ),
    default: 'undefined',
    description: 'Callback that returns true/false if a connection is valid/invalid.',
  },
];

export default props;
