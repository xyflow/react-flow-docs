const nodes = [
  {
    id: 'A',
    data: { label: null },
    position: { x: 0, y: 0 },
    style: {
      width: 170,
      height: 120,
      background: 'rgba(0, 0, 0, 0.1)',
    },
  },
  {
    id: 'B',
    type: 'input',
    data: { label: 'child node 1' },
    position: { x: 10, y: 5 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'C',
    type: 'output',
    data: { label: 'child node 2' },
    position: { x: 10, y: 80 },
    parentNode: 'A',
    extent: 'parent',
  },
];

export default nodes;
