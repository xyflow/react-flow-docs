export default [
  {
    id: 'A',
    data: { label: 'Input Node' },
    position: { x: 0, y: 0 },
    style: {
      width: 160,
      height: 140,
      background: 'rgba(0, 0, 0, 0.1)',
    },
  },
  {
    id: 'B',
    data: { label: 'child node 1' },
    position: { x: 10, y: 5 },
    parentNode: 'A',
  },
  {
    id: 'C',
    data: { label: 'child node 2' },
    position: { x: 5, y: 80 },
    parentNode: 'B',
  },
];
