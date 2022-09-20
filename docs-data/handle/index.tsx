const props = [
  {
    name: 'type',
    type: "'source' or 'target'",
    default: "'source'",
    description: 'Defines the handle type',
  },
  {
    name: 'id',
    type: 'string',
    default: 'undefined',
    description:
      'You only need this when you have multiple source or target handles (otherwise the node id is used)',
  },
  {
    name: 'position',
    type: "'left', 'right', 'top' or 'bottom'",
    default: "'top' for type target, 'bottom' for type source",
    description: 'Handle position',
  },
  {
    name: 'onConnect',
    type: 'function',
    default: 'undefined',
    description: 'Gets triggered on connect. This callback only gets executed on source handles.',
  },
  {
    name: 'isValidConnection',
    type: 'function',
    default: 'undefined',
    description:
      "Receives a connection { target: 'some-id', source: 'another-id', sourceHandle: 'source handle id or null', targetHandle: 'target handle id or null' } as param, returns a boolean",
  },
  {
    name: 'isConnectable',
    type: 'boolean',
    default: 'true',
    description: 'boolean (this prop gets passed to your custom node component)',
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
