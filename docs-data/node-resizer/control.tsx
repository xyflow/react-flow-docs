const props = [
  {
    name: 'nodeId',
    type: 'string',
    default: 'undefined',
    description: 'The id of the node where the resize control should be added',
    required: true,
  },
  {
    name: 'position',
    type: "'top' | 'bottom' | 'left' | 'right' (for line variant); 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' (for handle variant)",
    default: 'bottom-right',
    description: 'The position where the control should be placed',
  },
  {
    name: 'variant',
    type: "'handle' | 'line'",
    default: 'handle',
    description:
      'The type of the control. Handles are used for the corners of a node, the lines are used for the sides of a node.',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Styles that will be attached to the control component',
  },
  {
    name: 'className',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name for the control component',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: 'null',
    description:
      'React children that will be rendered inside the control. Can be a custom icon for example.',
  },
];

export default props;
