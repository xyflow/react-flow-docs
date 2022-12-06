const props = [
  {
    name: 'color',
    type: 'string',
    default: 'undefined',
    description: 'The color of the resize controls',
  },
  {
    name: 'isVisible',
    type: 'boolean',
    default: 'true',
    description:
      'This flag can be used to toggle the visibility of the resizer, useful if you want to display the controls only if a node is selected',
  },
  {
    name: 'minWidth',
    type: 'number',
    default: '10',
    description: 'The minimal width of the node to which it can be resized',
  },
  {
    name: 'minHeight',
    type: 'number',
    default: '10',
    description: 'The minimal height of the node to which it can be resized',
  },
  {
    name: 'nodeId',
    type: 'string',
    default: 'the id of the custom node where the <NodeResizer> is rendered',
    description:
      'The id of the node that will be resizable, you only need to set this if you are using the resizer outside of a custom node',
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
