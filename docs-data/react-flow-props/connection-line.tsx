import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'connectionRadius?',
    type: 'number',
    default: '20',
    description:
      'Radius around a handle where you can drop the connection line to create a new edge',
  },
  {
    name: 'connectionLineType?',
    type: <Link to="/docs/api/types#connectionlinetype">ConnectionLineType</Link>,
    default: "'default'",
    description: 'Available types are: "default" (bezier), "smoothstep", "step" and "straight".',
  },
  {
    name: 'connectionLineStyle?',
    type: 'CSSProperties',
    description: 'Connection style as SVG attributes',
  },
  {
    name: 'connectionLineComponent?',
    type: 'React.Component',
    description: (
      <>
        Custom connection line component
        <Link to="/docs/examples/edges/custom-connectionline">(example)</Link>
      </>
    ),
  },
  {
    name: 'connectionLineWrapperStyles?',
    type: 'CSSProperties',
    description: 'Styles for the connection line SVG wrapper',
  },
];

export default props;
