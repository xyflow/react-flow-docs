const props = [
  {
    name: 'fromX',
    type: 'number',
    description: 'x position of the source handle',
  },
  {
    name: 'toY',
    type: 'number',
    description: 'y position of the source handle',
  },
  {
    name: 'fromPosition',
    type: 'Position',
    description: 'position of the source handle',
  },
  {
    name: 'toX',
    type: 'number',
    description: 'x position of the target handle',
  },
  {
    name: 'toY',
    type: 'number',
    description: 'y position of the target handle',
  },
  {
    name: 'toPosition',
    type: 'Position',
    description: 'position of the target handle',
  },
  {
    name: 'connectionLineType',
    type: 'ConnectionLineType',
    description: 'type',
  },
  {
    name: 'connectionLineStyle',
    type: 'CSS.Properties',
    description: 'style',
  },
  {
    name: 'fromNode',
    type: 'Node',
    description: 'the node where the connection comes from',
  },
  {
    name: 'fromHandle',
    type: 'HandleElement',
    description: 'the handle where the connection comes from',
  },
];

export default props;
