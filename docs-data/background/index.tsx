const props = [
  {
    name: 'id?',
    type: 'string',
    description: 'Needed if you want to display multiple backgrounds',
  },
  {
    name: 'variant?',
    type: "'lines' | 'dots' | 'cross'",
    default: "'dots'",
    description: 'Background pattern type',
  },
  {
    name: 'gap?',
    type: 'number | [number, number]',
    default: '25',
    description:
      'Gap between the patterns. You can pass an array with two numbers to specify an x- and a y-gap.',
  },
  {
    name: 'size?',
    type: 'number',
    default: "1 if variant == 'dots' | 6 if variant == 'cross'",
    description: "Radius of the 'dots' or dimension of a 'cross'",
  },
  {
    name: 'lineWidth?',
    type: 'number',
    default: '1',
    description: "Line width for 'lines' or 'cross'",
  },
  {
    name: 'offset?',
    type: 'number',
    default: '2',
    description: 'Pattern offset',
  },
  {
    name: 'color?',
    type: 'string',
    default: '#81818a',
    description: 'Pattern color',
  },
  {
    name: 'style?',
    type: 'CSSProperties',
    description: 'Background style attributes',
  },
  {
    name: 'className?',
    type: 'string',
    description: 'Additional class name',
  },
];

export default props;
