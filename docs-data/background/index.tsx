const props = [
  {
    name: 'variant',
    type: "'lines', 'dots' or 'cross'",
    default: "'dots'",
    description: 'Background pattern type',
  },
  {
    name: 'gap',
    type: 'number or  [number, number]',
    default: '25',
    description:
      'Gap between the patterns. You can pass an array with two numbers to specify an x- and a y-gap.',
  },
  {
    name: 'size',
    type: 'number',
    default: "1 for 'dots', 6 for 'cross'",
    description: "Radius of the 'dots' or dimension of a 'cross'",
  },
  {
    name: 'lineWidth',
    type: 'number',
    default: '1',
    description: "Line width for 'lines' or 'cross'",
  },
  {
    name: 'color',
    type: 'string',
    default: '#81818a',
    description: 'Pattern color',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Background style attributes',
  },
  {
    name: 'className',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name',
  },
];

export default props;
