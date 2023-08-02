import React from 'react';
import Link from '@docusaurus/Link';

const options = [
  {
    name: 'id',
    type: 'string',
    description: 'Unique identifier',
  },
  {
    name: 'source',
    type: 'string',
    description: 'Id of the source node',
  },
  {
    name: 'target',
    type: 'string',
    description: 'Id of the target node',
  },
  {
    name: 'sourceHandle?',
    type: 'string | null',
    description: 'You only need this when you have multiple handles',
  },
  {
    name: 'targetHandle?',
    type: 'string | null',
    description: 'You only need this when you have multiple handles',
  },
  {
    name: 'type',
    type: (
      <>
        ('default' | 'step' | 'smoothstep' | 'straight') &{' '}
        <Link to="/docs/api/react-flow-props/#edgetypes">CustomEdgeTypes</Link>
      </>
    ),
    description: 'Defines the edge type',
  },
  {
    name: 'animated?',
    type: 'boolean',
    default: 'false',
    description: 'If true, edge is an animated flow',
  },
  {
    name: 'data',
    type: 'object',
    default: '{}',
    description: 'Can be used to pass data to your custom edge',
  },
  {
    name: 'selected?',
    type: 'boolean',
    default: 'false',
    description: 'If true, the edge is selected',
  },
  {
    name: 'hidden?',
    type: 'boolean',
    default: 'false',
    description: 'If true, the edge will not be rendered',
  },
  {
    name: 'updatable',
    type: (
      <>
        boolean or <Link to="/docs/api/types/#handletype">HandleType</Link>
      </>
    ),
    description:
      'String (id for a svg marker that you need to define yourself) or a marker configuration object',
  },
  {
    name: 'interactionWidth?',
    type: 'number',
    default: '20',
    description:
      'Renders an invisible edge for better interaction. Can be disabled by setting it to 0',
  },
  {
    name: 'label?',
    type: 'string',
    description: 'If this is set, the edge has a label at its center',
  },
  {
    name: 'labelStyle?',
    type: 'SVGProperties',
    description: 'Attributes for the edge label',
  },
  {
    name: 'labelShowBg?',
    type: 'boolean',
    description: 'If true the label has a background',
  },
  {
    name: 'labelBgStyle?',
    type: 'SVGProperties',
    description: 'Style for the label background',
  },
  {
    name: 'labelBgPadding?',
    type: '[number, number]',
    description: 'Padding for the label background',
  },
  {
    name: 'labelBgBorderRadius?',
    type: 'number',
    description: 'Border radius for the label background (2 by default)',
  },
  {
    name: 'markerStart?',
    type: (
      <>
        <Link to="/docs/api/edges/edge-options#edgemarkertype">EdgeMarkerType</Link>
      </>
    ),
    description:
      'String (id for a svg marker that you need to define yourself) or a marker configuration object',
  },
  {
    name: 'markerEnd?',
    type: (
      <>
        <Link to="/docs/api/edges/edge-options#edgemarkertype">EdgeMarkerType</Link>
      </>
    ),
    description:
      'String (id for a svg marker that you need to define yourself) or a marker configuration object',
  },
  {
    name: 'style?',
    type: 'CSSProperties',
    description: 'Style for the edge',
  },
  {
    name: 'className?',
    type: 'string',
    description: 'Additional class name',
  },
  {
    name: 'zIndex?',
    type: 'number',
    default: '0',
    description: 'Controls the layer order of the edges',
  },
  {
    name: 'ariaLabel?',
    type: 'string',
    default: "'from ${source} to ${target}'",
    description: 'The aria-label for the edge',
  },
  {
    name: 'pathOptions?',
    type: "{ offset: number, borderRadius: number } if type == 'smoothstep' | { curvature: number } if type == 'default'",
    description: 'Can only be used for smoothstep and default types',
  },
];

export default options;
