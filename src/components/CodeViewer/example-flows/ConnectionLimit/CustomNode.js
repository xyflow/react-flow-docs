import React, { memo } from 'react';
import { Position } from 'reactflow';
import CustomHandle from './CustomHandle';

const CustomNode = ({ data }) => {
  const { isConnectable, maxConnections } = data;
  const styles = {
    background: 'white',
    padding: 16,
    border: '1px solid black',
    opacity: isConnectable ? '100%' : '50%',
  };

  return (
    <div style={styles}>
      <CustomHandle
        position={Position.Left}
        isConnectable={isConnectable}
        maxConnections={maxConnections}
      />
      <div>Is Connectable: {`${isConnectable}`}</div>
      <div>Connection Limit: {maxConnections ?? 'infinite'}</div>
    </div>
  );
};

export default memo(CustomNode);
