import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'onInit?',
    type: (
      <>
        (reactFlowInstance: <Link to="/docs/api/react-flow-instance/">ReactFlowInstance</Link>)
        =&gt; void
      </>
    ),
    description: 'Called when React Flow is initialized',
  },
  {
    name: 'onError?',
    type: <>(code: string, message: string) =&gt; void</>,
    description: (
      <>
        Called when an error happens:{' '}
        <Link to="https://github.com/wbkd/react-flow/blob/main/packages/core/src/contants.ts">
          Error codes
        </Link>
      </>
    ),
  },
];

export default props;
