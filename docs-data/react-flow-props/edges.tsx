const props = [
  {
    name: 'onEdgeClick(event: React.MouseEvent, edge: Edge)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user clicks an edge',
  },
  {
    name: 'onEdgeMouseEnter(event: React.MouseEvent, edge: Edge)',
    type: 'function',
    default: 'undefined',
    description: 'Edge mouse enter',
  },
  {
    name: 'onEdgeMouseMove(event: React.MouseEvent, edge: Edge)',
    type: 'function',
    default: 'undefined',
    description: 'Edge mouse move',
  },
  {
    name: 'onEdgeMouseLeave(event: React.MouseEvent, edge: Edge)',
    type: 'function',
    default: 'undefined',
    description: 'Edge mouse leave',
  },
  {
    name: 'onEdgeContextMenu(event: React.MouseEvent, edge: Edge)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user does a right-click on an edge',
  },
  {
    name: 'onEdgeUpdate(oldEdge, newConnection)',
    type: 'function',
    default: 'undefined',
    description: 'Called when the end of an edge gets dragged to another source or target',
  },
  {
    name: 'onEdgeUpdateStart(event: React.MouseEvent, edge: Edge, handleType: HandleType)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user starts to update an edge',
  },
  {
    name: 'onEdgeUpdateEnd(event: MouseEvent, edge: Edge, handleType: HandleType)',
    type: 'function',
    default: 'undefined',
    description:
      'Called when user ends an edge update (for TS users: this is a normal MouseEvent and not a React.MouseEvent like the other ones).',
  },
  {
    name: 'onEdgesDelete(edges: Edge[])',
    type: 'function',
    default: 'undefined',
    description: 'Called when edges get deleted',
  },
  {
    name: 'onEdgesChange(edgeChanges)',
    type: 'function',
    default: 'undefined',
    description: 'Handler for adding interactivity for a controlled flow',
  },
];

export default props;
