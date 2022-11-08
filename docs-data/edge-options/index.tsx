import React from 'react';
import Link from '@docusaurus/Link';

const options = [
  {
    name: 'id (required)',
    type: 'string',
    description: 'Unique identifier',
  },
  {
    name: 'source (required)',
    type: 'string',
    description: 'Id of the source node',
  },
  {
    name: 'target (required)',
    type: 'string',
    description: 'Id of the target node',
  },
  {
    name: 'sourceHandle',
    type: 'string',
    description: 'You only need this when you have multiple handles',
  },
  {
    name: 'targetHandle',
    type: 'string',
    description: 'You only need this when you have multiple handles',
  },
  {
    name: 'type',
    type: "'default' (bezier), 'step', 'smoothstep' or 'straight' + your custom types",
    description: 'Defines the edge type',
  },
  {
    name: 'animated',
    type: 'boolean',
    description: 'If true, edge is an animated flow',
  },
  {
    name: 'data',
    type: 'object',
    description: 'Can be used to pass data to your custom edge',
  },
  {
    name: 'selected',
    type: 'boolean',
    description: 'If true, the edge is selected',
  },
  {
    name: 'hidden',
    type: 'boolean',
    description: 'If true, the edge will not be rendered',
  },
  {
    name: 'interactionWidth',
    type: 'number',
    description:
      'Renders an invisible edge for better interaction. Can be disabled by setting it to 0, default=20',
  },
  {
    name: 'label',
    type: 'string',
    description: 'If this is set, the edge has a label at its center',
  },
  {
    name: 'labelStyle',
    type: 'SVGProperties',
    description: 'Attributes for the edge label',
  },
  {
    name: 'labelShowBg',
    type: 'boolean',
    description: 'If true the label has a background',
  },
  {
    name: 'labelBgStyle',
    type: 'SVGProperties',
    description: 'Style for the label background',
  },
  {
    name: 'labelBgPadding',
    type: '[number, number]',
    description: 'Padding for the label background',
  },
  {
    name: 'labelBgBorderRadius',
    type: 'number',
    description: 'Border radius for the label background (2 by default)',
  },
  {
    name: 'markerStart',
    type: (
      <>
        <Link to="/docs/api/edges/edge-options#edgemarkertype">EdgeMarkerType</Link>
      </>
    ),
    description:
      'String (id for a svg marker that you need to define yourself) or a marker configuration object',
  },
  {
    name: 'markerEnd',
    type: (
      <>
        <Link to="/docs/api/edges/edge-options#edgemarkertype">EdgeMarkerType</Link>
      </>
    ),
    description:
      'String (id for a svg marker that you need to define yourself) or a marker configuration object',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    description: 'Style for the edge',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional class name',
  },
  {
    name: 'zIndex',
    type: 'number, default: 0',
    description: 'Controls the layer order of the edges',
  },
  {
    name: 'ariaLabel',
    type: "string, default: 'from ${source} to ${target}' `",
    description: 'The aria-label for the edge',
  },
  {
    name: 'pathOptions',
    type: 'object - smoothstep: { offset: number, borderRadius: number }, default: { curvature: number }',
    description: 'Can only be used for smoothstep and default types',
  },
];

export default options;
