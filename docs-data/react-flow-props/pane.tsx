import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'onMove',
    type: (
      <>
        (event: MouseEvent, viewport: <Link to="/docs/api/types/#viewport">Viewport</Link>) =&gt;
        void
      </>
    ),
    default: 'undefined',
    description: 'Called when user is panning or zooming',
  },
  {
    name: 'onMoveStart',
    type: (
      <>
        (event: MouseEvent, viewport: <Link to="/docs/api/types/#viewport">Viewport</Link>) =&gt;
        void
      </>
    ),
    default: 'undefined',
    description: 'Called when user starts panning or zooming',
  },
  {
    name: 'onMoveEnd',
    type: (
      <>
        (event: MouseEvent, viewport: <Link to="/docs/api/types/#viewport">Viewport</Link>) =&gt;
        void
      </>
    ),
    default: 'undefined',
    description: 'Called when user ends panning or zooming',
  },
  {
    name: 'onSelectionChange({ nodes, edges }: OnSelectionChangeParams)',
    type: (
      <>
        (params: <Link to="/docs/api/types/#onselectionchangeparams">OnSelectionChangeParams</Link>)
        =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user selects one or multiple elements',
  },
  {
    name: 'onSelectionDragStart',
    type: (
      <>
        (event: React.MouseEvent, nodes:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user starts to drag a selection',
  },
  {
    name: 'onSelectionDrag',
    type: (
      <>
        (event: React.MouseEvent, nodes:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user drags a selection',
  },
  {
    name: 'onSelectionDragStop',
    type: (
      <>
        (event: React.MouseEvent, nodes:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user stops to drag a selection',
  },
  {
    name: 'onSelectionContextMenu',
    type: (
      <>
        (event: React.MouseEvent, nodes:{' '}
        <Link to="/docs/api/nodes/node-options/#typescript">Node</Link>[]) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called when user does a right-click on a selection',
  },
  {
    name: 'onPaneClick',
    type: <>(event: React.MouseEvent) =&gt; void</>,
    default: 'undefined',
    description: 'Called when user clicks directly on the canvas',
  },
  {
    name: 'onPaneMouseEnter',
    type: <>(event: React.MouseEvent) =&gt; void</>,
    default: 'undefined',
    description: 'Called when user enters the canvas with the mouse',
  },
  {
    name: 'onPaneMouseMove',
    type: <>(event: React.MouseEvent) =&gt; void</>,
    default: 'undefined',
    description: 'Called when user clicks directly on the canvas',
  },
  {
    name: 'onPaneMouseLeave',
    type: <>(event: React.MouseEvent) =&gt; void</>,
    default: 'undefined',
    description: 'Called when user clicks leaves the canvas with the mouse',
  },
  {
    name: 'onPaneContextMenu',
    type: <>(event: React.MouseEvent) =&gt; void</>,
    default: 'undefined',
    description: 'Called when user does a right-click on the canvas',
  },
  {
    name: 'onPaneScroll',
    type: <>(event: React.MouseEvent) =&gt; void</>,
    default: 'undefined',
    description: 'Called when user scrolls pane (only works when zoomOnScroll is set to `false)',
  },
];

export default props;
