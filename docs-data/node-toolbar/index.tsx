import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'position?',
    type: <Link to="/docs/api/types/#position">Position</Link>,
    default: "'top'",
    description: 'The position of the toolbar relative the node.',
  },
  {
    name: 'align?',
    type: <Link to="/docs/api/types/#align">Align</Link>,
    default: "'center'",
    description: 'The alignment of the toolbar.',
  },
  {
    name: 'offset?',
    type: 'number',
    default: '10',
    description: 'The margin between the node and the toolbar in pixels.',
  },
  {
    name: 'nodeId?',
    type: 'string | string[]',
    default: 'The id of the custom node where the <NodeToolbar /> is rendered',
    description:
      'The id(s) of the node(s) that the toolbar should be attached to. You can pass multiple ids to render a toolbar for a multi-selection. If nodeId is not set, the toolbar will be attached to the custom node that it is mounted in.',
  },
  {
    name: 'isVisible?',
    type: 'boolean',
    description: (
      <>
        Set this to true to show the toolbar. Overwrites the{' '}
        <Link to="#default-behavior">default behavior</Link>.
      </>
    ),
  },
  {
    name: 'style?',
    type: 'CSSProperties',
    description: 'Toolbar style attributes',
  },
  {
    name: 'className?',
    type: 'string',
    description: 'Additional class name',
  },
];

export default props;
