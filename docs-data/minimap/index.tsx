import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'pannable?',
    type: 'boolean',
    default: 'false',
    description:
      'If set to true you can control the React Flow viewport position by dragging the minimap.',
  },
  {
    name: 'zoomable?',
    type: 'boolean',
    default: 'false',
    description:
      'If set to true you can control the React Flow viewport scale by zooming (scroll or pinch) the minimap.',
  },
  {
    name: 'nodeColor?',
    type: (
      <>
        string | (node: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt;
        string
      </>
    ),
    default: '#fff',
    description:
      'If you pass a color string, all nodes get that color. If you pass a function you can return a color depending on the passed node',
  },
  {
    name: 'nodeStrokeColor?',
    type: (
      <>
        string | (node: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt;
        string
      </>
    ),
    default: '#555',
    description:
      'If you pass a color string, all nodes get that strokecolor. If you pass a function you can return a color depending on the passed node',
  },
  {
    name: 'nodeBorderRadius?',
    type: 'number',
    default: '5',
    description: 'Node border radius',
  },
  {
    name: 'nodeStrokeWidth?',
    type: 'number',
    default: '2',
    description: 'Node stroke width',
  },
  {
    name: 'nodeClassName?',
    type: (
      <>
        string | (node: <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt;
        string
      </>
    ),
    description:
      'Node class name. If you pass a function you can return a class name depending on the passed node',
  },
  {
    name: 'nodeComponent?',
    type: (
      <>
        React.ComponentType(
        {<Link to="#custom-node-prop-types">MiniMapNodeProps</Link>})
      </>
    ),
    description: 'Custom component for a node.',
  },
  {
    name: 'maskColor?',
    type: 'string',
    default: '"rgb(240, 242, 243, 0.7)"',
    description: 'Mask color',
  },
  {
    name: 'maskStrokeColor?',
    type: 'string',
    default: '"none"',
    description: 'Inner mask stroke color',
  },
  {
    name: 'maskStrokeWidth?',
    type: 'number',
    default: '1',
    description: 'Inner mask stroke width',
  },
  {
    name: 'inversePan?',
    type: 'boolean',
    default: 'false',
    description: 'Determines if map should pan in the opposite direction',
  },
  {
    name: 'zoomStep?',
    type: 'number',
    default: 10,
    description: 'Zoom step for zoomable minimap',
  },
  {
    name: 'onClick?',
    type: (
      <>
        (event: React.MouseEvent, position: <Link to="/docs/api/types/#xyposition">XYPosition</Link>
        ) =&gt; void
      </>
    ),
    description: `Get's called when the minimap is clicked.`,
  },
  {
    name: 'onNodeClick?',
    type: (
      <>
        (event: React.MouseEvent, node:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>) =&gt; void
      </>
    ),
    description: `Get's called when a minimap node is clicked.`,
  },
  {
    name: 'ariaLabel?',
    type: 'string | null',
    default: '"React Flow mini map"',
    description: 'ariaLabel for the minimap. You can set it to `null` to hide it.',
  },
  {
    name: 'style?',
    type: 'CSSProperties',
    description: 'Mini map style attributes',
  },
  {
    name: 'className?',
    type: 'string',
    description: 'Additional class name',
  },
  {
    name: 'position?',
    type: <Link to="/docs/api/types/#panelposition">PanelPosition</Link>,
    default: "'bottom-right'",
    description: 'Position of the minimap panel in the viewport',
  },
];

export default props;
