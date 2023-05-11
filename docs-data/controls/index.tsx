import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'showZoom?',
    type: 'boolean',
    default: 'true',
    description: 'Display zoom button',
  },
  {
    name: 'showFitView?',
    type: 'boolean',
    default: 'true',
    description: 'Display fit view button',
  },
  {
    name: 'showInteractive?',
    type: 'boolean',
    default: 'true',
    description: 'Display interactive button',
  },
  {
    name: 'onZoomIn?',
    type: '() => void',
    description: 'callback when the zoom-in button gets pressed',
  },
  {
    name: 'onZoomOut?',
    type: '() => void',
    description: 'callback when the zoom-out button gets pressed',
  },
  {
    name: 'onFitView?',
    type: '() => void',
    description: 'callback when the fit-view button gets pressed',
  },
  {
    name: 'onInteractiveChange?',
    type: '(interactiveStatus: boolean) => void',
    description: 'callback when the lock button is pressed',
  },
  {
    name: 'style?',
    type: 'CSSProperties',
    description: 'Controls style attributes',
  },
  {
    name: 'className?',
    type: 'string',
    description: 'Additional class name',
  },
  {
    name: 'position',
    type: <Link to="/docs/api/types/#panelposition">PanelPosition</Link>,
    default: "'bottom-left'",
    description: 'Position of the controls panel in the viewport',
  },
];

export default props;
