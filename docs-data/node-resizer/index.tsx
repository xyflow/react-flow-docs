import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'nodeId',
    type: 'string',
    default: 'the id of the custom node where the <NodeResizer> is rendered',
    description:
      'The id of the node that will be resizable, you only need to set this if you are using the resizer outside of a custom node',
  },
  {
    name: 'color',
    type: 'string',
    default: 'undefined',
    description: 'The color of the resize controls',
  },
  {
    name: 'isVisible',
    type: 'boolean',
    default: 'true',
    description:
      'This flag can be used to toggle the visibility of the resizer, useful if you want to display the controls only if a node is selected',
  },
  {
    name: 'minWidth',
    type: 'number',
    default: '10',
    description: 'The minimal width of the node to which it can be resized',
  },
  {
    name: 'minHeight',
    type: 'number',
    default: '10',
    description: 'The minimal height of the node to which it can be resized',
  },
  {
    name: 'handleStyle',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Styles that will be attached to the resize handle component',
  },
  {
    name: 'handleClassName',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name for the resize handle',
  },
  {
    name: 'lineStyle',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Styles that will be attached to the resize lines',
  },
  {
    name: 'lineClassName',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name for the resize lines',
  },
  {
    name: 'onResizeStart',
    type: (
      <>
        (event: <Link to="/docs/api/types/#resizedragevent">ResizeDragEvent</Link>, params:{' '}
        <Link to="/docs/api/types/#resizeparams">ResizeParams</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called on resize start',
  },
  {
    name: 'onResize',
    type: (
      <>
        (event: <Link to="/docs/api/types/#resizedragevent">ResizeDragEvent</Link>, params:{' '}
        <Link to="/docs/api/types/#resizeparamswithdirection">ResizeParamsWithDirection</Link>)
        =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called on resize',
  },
  {
    name: 'onResizeEnd',
    type: (
      <>
        (event: <Link to="/docs/api/types/#resizedragevent">ResizeDragEvent</Link>, params:{' '}
        <Link to="/docs/api/types/#resizeparams">ResizeParams</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called on resize end',
  },
  {
    name: 'shouldResize',
    type: (
      <>
        (event: <Link to="/docs/api/types/#resizedragevent">ResizeDragEvent</Link>, params:{' '}
        <Link to="/docs/api/types/#resizeparamswithdirection">ResizeParamsWithDirection</Link>)
        =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called on resize. When it returns false, the resize will be canceled.',
  },
];

export default props;
