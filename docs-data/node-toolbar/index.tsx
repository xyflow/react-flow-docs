import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'nodeId',
    type: 'string',
    default: 'undefined',
    description: 'The id of the node that the toolbar should be attached to.',
    required: true,
  },
  {
    name: 'position',
    type: (
      <>
        <Link to="/docs/api/types/#position">Position</Link> ('top'`, 'right', 'bottom' or 'left')
      </>
    ),
    default: 'top',
    description: 'The position of the toolbar relative the node.',
  },
  {
    name: 'offset',
    type: 'number',
    default: '10',
    description: 'The margin between the node and the toolbar in pixels.',
  },
  {
    name: 'isVisible',
    type: 'boolean',
    default: 'undefined',
    description: (
      <>
        Set this to true to show the toolbar. Overwrites the{' '}
        <Link to="#default-behavior">default behavior</Link>.
      </>
    ),
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Toolbar style attributes',
  },
  {
    name: 'className',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name',
  },
];

export default props;
