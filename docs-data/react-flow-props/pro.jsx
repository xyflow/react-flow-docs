import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'proOptions',
    type: 'object',
    default: 'undefined',
    description: (
      <>
        This object contains options that are only intended for subscribers of{' '}
        <a href="https://pro.reactflow.dev" target="_blank">
          React Flow Pro
        </a>
        .
      </>
    ),
  },
  {
    name: 'proOptions.hideAttribution',
    type: 'boolean',
    default: 'false',
    description: (
      <>
        This flag removes the attribution from the React Flow renderer. If you’re considering
        removing the attribution please make sure to read the{' '}
        <Link to="/docs/guides/remove-attribution">Remove Attribution Guide</Link> first.
      </>
    ),
  },
];

export default props;
