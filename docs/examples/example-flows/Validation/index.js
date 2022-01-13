import React from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Handle } from 'react-flow-renderer';

import './index.css';

const initialNodes = [
  { id: '0', type: 'custominput', position: { x: 0, y: 150 } },
  { id: 'A', type: 'customnode', position: { x: 250, y: 0 } },
  { id: 'B', type: 'customnode', position: { x: 250, y: 150 } },
  { id: 'C', type: 'customnode', position: { x: 250, y: 300 } },
];

const isValidConnection = (connection) => connection.target === 'B';
const onConnectStart = (event, { nodeId, handleType }) => console.log('on connect start', { nodeId, handleType });
const onConnectStop = (event) => console.log('on connect stop', event);
const onConnectEnd = (event) => console.log('on connect end', event);

const CustomInput = () => (
  <>
    <div>Only connectable with B</div>
    <Handle type="source" position="right" isValidConnection={isValidConnection} />
  </>
);

const CustomNode = ({ id }) => (
  <>
    <Handle type="target" position="left" isValidConnection={isValidConnection} />
    <div>{id}</div>
    <Handle type="source" position="right" isValidConnection={isValidConnection} />
  </>
);

const nodeTypes = {
  custominput: CustomInput,
  customnode: CustomNode,
};

const HorizontalFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = (params) => {
    console.log('on connect', params);
    setEdges((eds) => addEdge(params, eds));
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      selectNodesOnDrag={false}
      className="validationflow"
      nodeTypes={nodeTypes}
      onConnectStart={onConnectStart}
      onConnectStop={onConnectStop}
      onConnectEnd={onConnectEnd}
      fitViewOnInit
      attributionPosition="bottom-left"
    />
  );
};

export default HorizontalFlow;
