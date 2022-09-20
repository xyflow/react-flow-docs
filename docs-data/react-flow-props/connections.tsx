const props = [
  {
    name: 'onConnect({ source, target }: Connection)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user connects two nodes',
  },
  {
    name: 'onConnectStart(event: React.MouseEvent, { nodeId, handleType }: OnConnectStartParams)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user starts to drag connection line',
  },
  {
    name: 'onConnectEnd(event: React.MouseEvent)',
    type: 'function',
    default: 'undefined',
    description: 'Called after user stops or connects nodes (called after onConnect)',
  },
  {
    name: 'onClickConnectStart(event: React.MouseEvent, { nodeId, handleType }: OnConnectStartParams)',
    type: 'function',
    default: 'undefined',
    description: 'Called when user starts to do a connection by click',
  },
  {
    name: 'onClickConnectEnd(event: React.MouseEvent)',
    type: 'function',
    default: 'undefined',
    description: 'Called after user stops a connection by click (called after onConnect)',
  },
];

export default props;
