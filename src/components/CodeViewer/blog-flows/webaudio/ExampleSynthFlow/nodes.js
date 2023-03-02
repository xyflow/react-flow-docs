export default [
  {
    type: 'input',
    id: 'a',
    data: { label: 'osc', frequency: 440, type: 'triangle' },
    position: { x: 250, y: 25 },
  },

  {
    id: 'b',
    data: { label: 'amp', gain: 0.5 },
    position: { x: 100, y: 125 },
  },
  {
    type: 'output',
    id: 'c',
    data: { label: 'dac' },
    position: { x: 250, y: 250 },
  },
];
