import React from 'react';
import Link from '@docusaurus/Link';

const options = [
  {
    name: 'label',
    type: 'string | ReactNode',
    description: 'The text or label to render along an edge.',
  },
  {
    name: 'labelStyle?',
    type: 'CSSProperties',
    default: '{}',
    description: 'Custom styles to apply to the label.',
  },
  {
    name: 'labelBgStyle?',
    type: 'CSSProperties',
    default: '{}',
    description: 'Custom styles to apply to the background of the label.',
  },
  {
    name: 'labelShowBg?',
    type: 'boolean',
    default: 'true',
    description: "Toggles whether to render the label's background or not.",
  },
  {
    name: 'labelBgPadding?',
    type: '[number, number]',
    default: '[2, 4]',
    description:
      'The amount of horizontal and vertical padding to apply to the label background, in pixels.',
  },
  {
    name: 'labelBgBorderRadius?',
    type: 'number',
    default: '2',
    description: 'The border radius to apply to the label background, in pixels.',
  },
  { name: 'x', type: 'number', description: 'The x position where the label should be rendered.' },
  { name: 'y', type: 'number', description: 'The y position where the label should be rendered.' },
];

export default options;
