import React from 'react';
import Link from '@docusaurus/Link';

const props = {
  react: [
    {
      name: 'onSelectionChange({ nodes, edges }: OnSelectionChangeParams)',
      type: (
        <>
          (params:{' '}
          <Link to="/docs/api/types/#onselectionchangeparams">OnSelectionChangeParams</Link>) =&gt;
          void
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
      name: 'onSelectionStart',
      type: '() => void',
      default: 'undefined',
      description: 'Gets called when user starts a selection.',
    },
    {
      name: 'onSelectionEnd',
      type: '() => void',
      default: 'undefined',
      description: 'Gets called when user ends a selection.',
    },
  ],
  svelte: [],
};

export default props;
