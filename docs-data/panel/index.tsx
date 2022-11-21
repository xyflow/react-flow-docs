import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'position',
    type: (
      <>
        <Link to="/docs/api/types/#panelposition">PanelPosition</Link> ('top-left'`, 'top-center',
        'top-right', 'bottom-left', 'bottom-center' or 'bottom-right')
      </>
    ),
    default: "'top-left'",
    description: 'Position of the panel in the viewport',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Additional styles',
  },
  {
    name: 'className',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name',
  },
];

export default props;
