import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'id',
    description: 'The id of the React Flow node.',
    type: 'string',
  },
  {
    name: 'x',
    description: 'The x position of the React Flow node.',
    type: 'number',
  },
  {
    name: 'y',
    description: 'The y position of the React Flow node.',
    type: 'number',
  },
  {
    name: 'width',
    description: 'The width of the React Flow node.',
    type: 'number',
  },
  {
    name: 'height',
    description: 'The height of the React Flow node.',
    type: 'number',
  },
  {
    name: 'borderRadius',
    description: (
      <>
        The border radius passed into the <code>nodeBorderRadius</code> prop of the{' '}
        <code>MiniMap</code> component.
      </>
    ),
    type: 'number',
  },
  {
    name: 'className',
    description: (
      <>
        The class name passed into the <code>nodeClassName</code> prop of the <code>MiniMap</code>{' '}
        component.
      </>
    ),
    type: 'string',
  },
  {
    name: 'color',
    description: (
      <>
        The color passed into the <code>nodeColor</code> prop of the <code>{'<MiniMap />'}</code>
        component, or the color computed by the function passed in instead.
      </>
    ),
    type: 'string',
  },
  {
    name: 'shapeRendering',
    description:
      'This is computed based on your browser and some other factors and can be used to hint at the SVG renderer on how to optimize the rendering of paths.',
    type: '"crispEdges" | "geometricPrecision"',
  },
  {
    name: 'strokeColor',
    description: (
      <>
        The stroke color passed into the <code>nodeStrokeColor</code> prop of the{' '}
        <code>MiniMap</code> component.
      </>
    ),
    type: 'string',
  },
  {
    name: 'strokeWidth',
    description: (
      <>
        The stroke width passed into the <code>nodeStrokeWidth</code> prop of the{' '}
        <code>MiniMap</code>
        component.',
      </>
    ),
    type: 'number',
  },
  {
    name: 'style?',
    description: 'Any styles set on the React Flow node.',
    type: 'CSSProperties',
  },
  {
    name: 'onClick?',
    description: 'An optional click handler for the minimap node.',
    type: '(event: MouseEvent, id: string) => void',
  },
];

export default props;
