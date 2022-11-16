import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'connectionLineType',
    type: <Link to="/docs/api/types#connectionlinetype">ConnectionLineType</Link>,
    default: 'default',
    description: 'Available types are: "default", "smoothstep", "step" and "straight".',
  },
  {
    name: 'connectionLineStyle',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Connection style as SVG attributes',
  },
  {
    name: 'connectionLineComponent',
    type: 'React component',
    default: 'undefined',
    description: (
      <>
        Custom connection line component
        <Link to="/docs/examples/edges/custom-connectionline">(example)</Link>
      </>
    ),
  },
  {
    name: 'connectionLineWrapperStyles',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Styles for the connection line SVG wrapper',
  },
];

export default props;
