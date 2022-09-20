const props = [
  {
    name: 'onNodeClick(event: React.MouseEvent, node: Node)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user clicks a node',
  },
  {
    name: 'onNodeDragStart(event: React.MouseEvent, node: Node, nodes: Node[])',
    type: 'function',
    default: 'undefined',
    description: 'Node drag start',
  },
  {
    name: 'onNodeDrag(event: React.MouseEvent, node: Node, nodes: Node[])',
    type: 'function',
    default: 'undefined',
    description: 'Node drag',
  },
  {
    name: 'onNodeDragStop(event: React.MouseEvent, node: Node, nodes: Node[])',
    type: 'function',
    default: 'undefined',
    description: 'Node drag stop',
  },
  {
    name: 'onNodeMouseEnter(event: React.MouseEvent, node: Node)',
    type: 'function',
    default: 'undefined',
    description: 'Node mouse enter',
  },
  {
    name: 'onNodeMouseMove(event: React.MouseEvent, node: Node)',
    type: 'function',
    default: 'undefined',
    description: 'Node mouse move',
  },
  {
    name: 'onNodeMouseLeave(event: React.MouseEvent, node: Node)',
    type: 'function',
    default: 'undefined',
    description: 'Node mouse leave',
  },
  {
    name: 'onNodeContextMenu(event: React.MouseEvent, node: Node)',
    type: 'function',
    default: 'undefined',
    description: 'Node context menu',
  },
  {
    name: 'onNodeDoubleClick(event: React.MouseEvent, node: Node)',
    type: 'function',
    default: 'undefined',
    description: 'Node double click',
  },
  {
    name: 'onNodesDelete(nodes)',
    type: 'function',
    default: 'undefined',
    description: 'Called when nodes get deleted',
  },
  {
    name: 'onNodesChange(nodeChanges)',
    type: 'function',
    default: 'undefined',
    description: 'Handler for adding interactivity for a controlled flow',
  },
];

export default props;
