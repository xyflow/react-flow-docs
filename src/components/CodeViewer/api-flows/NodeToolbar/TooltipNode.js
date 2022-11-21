import { memo, useState } from 'react';
import { Handle, Position, NodeToolbar } from 'reactflow';

const TooltipNode = ({ id, data }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <NodeToolbar nodeId={id} isVisible={isVisible} position={data.toolbarPosition}>
        <div>This is a tooltip</div>
      </NodeToolbar>
      <div>{data.label}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default memo(TooltipNode);
