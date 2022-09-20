import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'onInit',
    type: (
      <>
        (reactFlowInstance: <Link to="/docs/api/react-flow-instance/">ReactFlowInstance</Link>)
        =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when React Flow is initialized',
  },
];

export default props;
