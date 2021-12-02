import React from 'react';
import ReactFlow, { Handle, ReactFlowProvider } from 'react-flow-renderer';

const elementsCustom = [
  {
    id: '2',
    type: 'special',
    position: { x: 100, y: 100 },
    data: { text: 'A custom node' },
  },
];

const customNodeStyles = {
  background: '#9CA8B3',
  color: '#FFF',
  padding: 10,
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <Handle type="target" position="left" style={{ borderRadius: 0 }} />
      <div>{data.text}</div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: '30%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ top: '70%', borderRadius: 0 }}
      />
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

const wrapperStyle = { height: 300, border: '1px solid #C5CBD2' };

const CustomNodeExample = () => {
  return (
    <div style={wrapperStyle} className="custom">
      <ReactFlowProvider>
        <ReactFlow elements={elementsCustom} nodeTypes={nodeTypes} />
      </ReactFlowProvider>
    </div>
  );
};

export default CustomNodeExample;
