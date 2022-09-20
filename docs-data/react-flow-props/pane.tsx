const props = [
  {
    name: 'onMove(event: MouseEvent, viewport: Viewport)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user is panning or zooming',
  },
  {
    name: 'onMoveStart(event: MouseEvent, viewport: Viewport)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user starts panning or zooming',
  },
  {
    name: 'onMoveEnd(event: MouseEvent, viewport: Viewport)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user ends panning or zooming',
  },
  {
    name: 'onSelectionChange({ nodes, edges }: OnSelectionChangeParams)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user selects one or multiple elements',
  },
  {
    name: 'onSelectionDragStart(event: React.MouseEvent, nodes: Node[])',
    type: 'function',
    default: 'undefined',
    description: 'Called when user starts to drag a selection',
  },
  {
    name: 'onSelectionDrag(event: React.MouseEvent, nodes: Node[])',
    type: 'function',
    default: 'undefined',
    description: 'Called when user drags a selection',
  },
  {
    name: 'onSelectionDragStop(event: React.MouseEvent, nodes: Node[])',
    type: 'function',
    default: 'undefined',
    description: 'Called when user stops to drag a selection',
  },
  {
    name: 'onSelectionContextMenu(event: React.MouseEvent, nodes: Node[])',
    type: 'function',
    default: 'undefined',
    description: 'Called when user does a right-click on a selection',
  },
  {
    name: 'onPaneClick(event: React.MouseEvent)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user clicks directly on the canvas',
  },
  {
    name: 'onPaneMouseEnter(event: React.MouseEvent)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user enters the canvas with the mouse',
  },
  {
    name: 'onPaneMouseMove(event: React.MouseEvent)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user clicks directly on the canvas',
  },
  {
    name: 'onPaneMouseLeave(event: React.MouseEvent)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user clicks leaves the canvas with the mouse',
  },
  {
    name: 'onPaneContextMenu(event: React.MouseEvent)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user does a right-click on the canvas',
  },
  {
    name: 'onPaneScroll(event: React.MouseEvent)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user scrolls pane (only works when zoomOnScroll is set to `false)',
  },
];

export default props;
