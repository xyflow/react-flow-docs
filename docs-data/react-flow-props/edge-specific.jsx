import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'elevateEdgesOnSelect',
    type: 'boolean',
    default: 'false',
    description: 'Edges get a higher zIndex if this is true and a connected node is selected',
  },
  {
    name: 'defaultMarkerColor',
    type: 'string',
    default: '#b1b1b7',
    description: 'Default marker color',
  },
  {
    name: 'defaultEdgeOptions',
    type: <Link to="/docs/api/types/#defaultedgeoptions">DefaultEdgeOptions</Link>,
    default: 'undefined',
    description: 'Edge options that apply for all edges',
  },
  {
    name: 'edgeUpdaterRadius',
    type: 'number',
    default: '10',
    description: 'The radius around the edge end which can be used for updating the edge',
  },
];

export default props;
