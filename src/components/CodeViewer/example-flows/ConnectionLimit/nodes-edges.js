export const initialNodes = [
  {
    id: 'a',
    type: 'input',
    sourcePosition: 'right',
    data: { label: 'Node 1' },
    position: {
      x: 0,
      y: 50,
    },
  },
  {
    id: 'b',
    type: 'input',
    sourcePosition: 'right',
    data: { label: 'Node 2' },
    position: {
      x: 0,
      y: 150,
    },
  },
  {
    id: 'c',
    type: 'custom',
    data: { isConnectable: true, maxConnections: 1 },
    position: {
      x: 250,
      y: 0,
    },
  },
  {
    id: 'd',
    type: 'custom',
    data: { isConnectable: false, maxConnections: 1 },
    position: {
      x: 250,
      y: 100,
    },
  },
  {
    id: 'e',
    type: 'custom',
    data: { isConnectable: true },
    position: {
      x: 250,
      y: 200,
    },
  },
];

export const initialEdges = [{ id: 'a->c', source: 'a', target: 'c' }];
