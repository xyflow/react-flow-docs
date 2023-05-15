import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'type?',
    type: "'source' | 'target'",
    default: "'source'",
    description: 'Defines the handle type',
  },
  {
    name: 'id?',
    type: 'string',
    description:
      'You only need this when you have multiple source or target handles (otherwise the node id is used)',
  },
  {
    name: 'position?',
    type: "'left' | 'right' | 'top' | 'bottom'",
    default: "'top' if type == 'target' | 'bottom' if type == 'source'",
    description: 'Handle position',
  },
  {
    name: 'onConnect?',
    type: (
      <>
        (connection: <Link to="/docs/api/types/#connection">Connection</Link>) =&gt; void
      </>
    ),
    description: 'Gets triggered on connect. This callback only gets executed on source handles.',
  },
  {
    name: 'isValidConnection?',
    type: (
      <>
        (connection: <Link to="/docs/api/types/#connection">Connection</Link>) =&gt; boolean
      </>
    ),
    description: (
      <>
        Can be used to perform custom validation of a connection. This callback will not be executed
        when edges are updated: where possible, prefer the
        <Link to="/docs/api/react-flow-props/#isvalidconnection-4">isValidConnection</Link>
        callback passed to the ReactFlow component.
      </>
    ),
  },
  {
    name: 'isConnectable?',
    type: 'boolean',
    default: 'true',
    description: 'boolean (this prop gets passed to your custom node component)',
  },
  {
    name: 'isConnectableStart?',
    type: 'boolean',
    default: 'true',
    description: "if set to false, you can't start a connection from this handle",
  },
  {
    name: 'isConnectableEnd?',
    type: 'boolean',
    default: 'true',
    description: "if set to false, you can't end a connection at this handle",
  },
  {
    name: 'style?',
    type: 'CSSProperties',
    description: 'Controls style attributes',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional class name',
  },
];

export default props;
