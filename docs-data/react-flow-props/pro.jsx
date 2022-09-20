import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'proOptions',
    type: 'object',
    default: 'undefined',
    description: <>This object contains options that are intended for pro subscribers</>,
  },
  {
    name: 'proOptions.hideAttribution',
    type: 'boolean',
    default: 'false',
    description: (
      <>
        Set this to true to remove the attribution from the React Flow renderer. Please read our
        <Link to="/docs/guides/remove-attribution">Attribution Guide</Link> before doing that
      </>
    ),
  },
];

export default props;
