import React from 'react';

const props = [
  {
    name: 'deleteKeyCode',
    type: 'string or string[] or null',
    default: "'Backspace'",
    description: (
      <>
        Key(s) that trigger a remove handler (when you pass an array, memoize or define it outside
        the component). You can set it to <code>null</code> to disable functionality.
      </>
    ),
  },
  {
    name: 'selectionKeyCode',
    type: 'string or string[] or null',
    default: "'Shift'",
    description: (
      <>
        While pressing the selectionKeyCode and dragging the mouse you can create a selection for
        multiple nodes and edges. You can set it to <code>null</code> to disable functionality
      </>
    ),
  },
  {
    name: 'multiSelectionKeyCode',
    type: 'string or string[] or null',
    default: "'Meta'",
    description: (
      <>
        While pressing the multiSelectionKeyCode you can select multiple nodes and edges with a
        click. You can set it to <code>null</code> to disable functionality
      </>
    ),
  },
  {
    name: 'zoomActivationKeyCode',
    type: 'string or string[] or null',
    default: "'Meta'",
    description: (
      <>
        While pressing the zoomActivationKeyCode you can zoom even if <code>panOnScroll=true</code>{' '}
        or
        <code>zoomOnScroll=false</code>. You can set it to <code>null</code> to disable
        functionality
      </>
    ),
  },
];

export default props;
