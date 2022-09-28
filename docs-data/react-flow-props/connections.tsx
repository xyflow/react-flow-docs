import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'onConnect',
    type: (
      <>
        (connection: <Link to="/docs/api/types/#connection">Connection</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user connects two nodes',
  },
  {
    name: 'onConnectStart',
    type: (
      <>
        (event: React.MouseEvent, params:{' '}
        <Link to="/docs/api/types/#onconnectstartparams">OnConnectStartParams</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user starts to drag connection line',
  },
  {
    name: 'onConnectEnd',
    type: <>(event: React.MouseEvent) =&gt; void</>,
    default: 'undefined',
    description: 'Called after user stops or connects nodes (called after onConnect)',
  },
  {
    name: 'onClickConnectStart',
    type: (
      <>
        (event: React.MouseEvent, params:{' '}
        <Link to="/docs/api/types/#onconnectstartparams">OnConnectStartParams</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user starts to do a connection by click',
  },
  {
    name: 'onClickConnectEnd',
    type: <>(event: React.MouseEvent) =&gt; void</>,
    default: 'undefined',
    description: 'Called after user stops a connection by click (called after onConnect)',
  },
];

export default props;
