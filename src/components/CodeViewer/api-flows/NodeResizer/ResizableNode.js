import { memo, FC } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

import { NodeResizer } from '@reactflow/node-resizer';

import '@reactflow/node-resizer/dist/style.css';

const ResizableNode = ({ data }) => {
  return (
    <>
      <NodeResizer minWidth={100} minHeight={30} />
      <Handle type="target" position={Position.Left} />
      <div style={{ padding: 10 }}>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(ResizableNode);
