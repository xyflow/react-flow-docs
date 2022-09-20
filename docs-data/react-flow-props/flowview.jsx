import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'fitView',
    type: 'boolean',
    default: 'false',
    description: 'Fits the view once to make all nodes visible',
  },
  {
    name: 'fitViewOptions',
    type: <Link to="/docs/api/types/#fitviewoptions">FitViewOptions</Link>,
    default: 'undefined',
    description: 'Options that are passed to the initial fitView ',
  },
  {
    name: 'minZoom',
    type: 'number',
    default: '0.5',
    description: 'Minimum zoom level',
  },
  {
    name: 'maxZoom',
    type: 'number',
    default: '2',
    description: 'Maximum zoom level',
  },
  {
    name: 'defaultViewport',
    type: <Link to="/docs/api/types/#viewport">Viewport</Link>,
    default: '{ x: 0, y: 0, zoom: 1 }',
    description: 'Default viewport position and zoom level',
  },
  {
    name: 'snapGrid',
    type: '[number, number]',
    default: '[25, 25]',
    description: 'Snap grid gap',
  },
  {
    name: 'snapToGrid',
    type: 'boolean',
    default: 'false',
    description: 'If true, snap grid is enabled',
  },
  {
    name: 'onlyRenderVisibleElements',
    type: 'boolean',
    default: 'false',
    description: 'If true, only nodes and edges inside the viewport are rendered',
  },
  {
    name: 'translateExtent',
    type: (
      <>
        <Link to="/docs/api/types/#coordinateextent">CoordinateExtent</Link> [[number, number],
        [number, number]]
      </>
    ),
    default: '[[-∞, -∞], [+∞, +∞]]',
    description: (
      <>
        Passed to the{' '}
        <Link to="https://github.com/d3/d3-zoom#zoom_translateExtent">
          d3-zoom translateExtent option
        </Link>
      </>
    ),
  },
  {
    name: 'nodeExtent',
    type: (
      <>
        <Link to="/docs/api/types/#coordinateextent">CoordinateExtent</Link> [[number, number],
        [number, number]]
      </>
    ),
    default: '[[-∞, -∞], [+∞, +∞]]',
    description: 'Defines the extent for the node positions',
  },
  {
    name: 'preventScrolling',
    type: 'boolean',
    default: 'true',
    description: 'If true, default browser scroll behaviour is prevented',
  },
  {
    name: 'attributionPosition',
    type: (
      <>
        <Link to="/docs/api/types/#panelposition">PanelPosition</Link> ('top-left'`, 'top-center',
        'top-right' and 'bottom-right')
      </>
    ),
    default: "'bottom-right'",
    description: 'Position of the "React Flow" attribution',
  },
];

export default props;
