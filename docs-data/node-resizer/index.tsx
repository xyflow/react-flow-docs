const props = [
  {
    name: 'nodeId',
    type: 'string',
    default: 'undefined',
    description: 'The id of the node that will be resizable',
    required: true,
  },
  {
    name: 'handleStyle',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Styles that will be attached to the resize handle component',
  },
  {
    name: 'handleClassName',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name for the resize handle',
  },
  {
    name: 'lineStyle',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Styles that will be attached to the resize lines',
  },
  {
    name: 'lineClassName',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name for the resize lines',
  },
];

export default props;
