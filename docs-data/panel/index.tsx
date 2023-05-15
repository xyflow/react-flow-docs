import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'position?',
    type: <Link to="/docs/api/types/#panelposition">PanelPosition</Link>,
    default: "'top-left'",
    description: 'Position of the panel in the viewport',
  },
  {
    name: 'style?',
    type: 'CSSProperties',
    description: 'Additional styles',
  },
  {
    name: 'className?',
    type: 'string',
    description: 'Additional class name',
  },
];

export default props;
