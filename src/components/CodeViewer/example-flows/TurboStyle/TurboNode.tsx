import React, { memo, ReactNode } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { FiCloud } from 'react-icons/fi';

export type TurboNodeData = {
  icon: ReactNode;
  title: string;
  subline?: string;
};

export default memo(({ data }: NodeProps<TurboNodeData>) => {
  return (
    <>
      <div className="cloud gradient">
        <div>
          <FiCloud />
        </div>
      </div>
      <div className="inner">
        <div className="body">
          <div className="title">{data.title}</div>
          {data.subline && <div className="subline">{data.subline}</div>}
        </div>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </>
  );
});
