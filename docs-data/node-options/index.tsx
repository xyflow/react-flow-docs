import React from 'react';
import Link from '@docusaurus/Link';

const options = [
  {
    name: 'id',
    type: 'string',
    description: 'Unique identifier',
  },
  {
    name: 'position',
    type: (
      <>
        <Link to="/docs/api/types/#xyposition">XYPosition</Link> (&#123; x: number, y: number
        &#125;)
      </>
    ),
    description: 'For child nodes this position is relative to their parent',
  },
  {
    name: 'data',
    type: 'object',
    description: '',
  },
  {
    name: 'type?',
    type: (
      <>
        ('input' | 'output' | 'default') &{' '}
        <Link to="/docs/api/react-flow-props/#nodetypes">CustomNodeypes</Link>
      </>
    ),
    default: "'default'",
    description: 'Defines the node type',
  },
  {
    name: 'targetPosition?',
    type: "'left' | 'right' | 'top' | 'bottom'",
    default: "'top'",
    description: "Target position is 'top' by default",
  },
  {
    name: 'sourcePosition?',
    type: "'left' | 'right' | 'top' | 'bottom'",
    default: "'bottom'",
    description: "Source position is 'bottom' by default",
  },
  {
    name: 'parentNode?',
    type: 'string',
    description: 'Node id of the parent node',
  },
  {
    name: 'expandParent?',
    type: 'boolean',
    description:
      'If this is true the parent node gets expanded when you drag the child to the outer bounds',
  },
  {
    name: 'extent?',
    type: (
      <>
        <Link to="/docs/api/types#coordinateextent">CoordinateExtent</Link> | 'parent'
      </>
    ),
    description:
      "The moving range for a node. If it's a child that shouln't leave the parent node, set it to 'parent'",
  },
  {
    name: 'selected?',
    type: 'boolean',
    description: 'If true, the node is selected',
  },
  {
    name: 'hidden?',
    type: 'boolean',
    description: 'If true, the node will not be rendered',
  },
  {
    name: 'draggable?',
    type: 'boolean',
    description:
      'If option is not set, the node is draggable (overwrites general nodesDraggable option)',
  },
  {
    name: 'connectable?',
    type: 'boolean',
    description:
      'If option is not set, the node is connectable (overwrites general nodesConnectable option)',
  },
  {
    name: 'selectable?',
    type: 'boolean',
    description:
      'If option is not set, the node is selectable (overwrites general elementsSelectable option)',
  },
  {
    name: 'deletable?',
    type: 'boolean',
    description: 'If option is not set, the node is deletable',
  },
  {
    name: 'dragHandle?',
    type: 'string',
    description: 'Selector for specifying an element as a drag handle',
  },
  {
    name: 'style?',
    type: 'CSSProperties',
    description: '',
  },
  {
    name: 'className?',
    type: 'string',
    description: '',
  },
  {
    name: 'zIndex?',
    type: 'number',
    default: '0',
    description: 'The zIndex property controls the stacking order of the nodes',
  },
  {
    name: 'ariaLabel?',
    type: 'string',
    description: (
      <>
        <Link to="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label">
          aria-label
        </Link>{' '}
        for the node. This has no default, because we assume that there is some text content in your
        node. If not, you could use this prop to make your nodes better accessible
      </>
    ),
  },
];

export default options;
