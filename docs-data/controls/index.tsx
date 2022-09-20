const props = [
  {
    name: 'showZoom',
    type: 'boolean',
    default: 'true',
    description: 'Display zoom button',
  },
  {
    name: 'showFitView',
    type: 'boolean',
    default: 'true',
    description: 'Display fit view button',
  },
  {
    name: 'showInteractive',
    type: 'boolean',
    default: 'true',
    description: 'Display interactive button',
  },
  {
    name: 'onZoomIn',
    type: 'function',
    default: 'undefined',
    description: 'callback when the zoom-in button gets pressed',
  },
  {
    name: 'onZoomOut',
    type: 'function',
    default: 'undefined',
    description: 'callback when the zoom-out button gets pressed',
  },
  {
    name: 'onFitView',
    type: 'function',
    default: 'undefined',
    description: 'callback when the fit-view button gets pressed',
  },
  {
    name: 'onInteractiveChange(isInteractive)',
    type: 'function',
    default: 'undefined',
    description: 'callback when the lock button is pressed',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Controls style attributes',
  },
  {
    name: 'className',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name',
  },
];

export default props;
