import { Handle, Position, useStore } from 'reactflow';

const connectionNodeIdSelector = (state) => state.connectionNodeId;

export default function CustomNode({ data, id }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);
  const isTarget = connectionNodeId && connectionNodeId !== id;

  const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };

  return (
    <div className="customNode">
      <div className="customNodeBody" style={{ borderStyle: isTarget ? 'dashed' : 'solid' }}>
        <Handle
          className="targetHandle"
          style={{ zIndex: 2 }}
          position={Position.Right}
          type="source"
        />
        <Handle
          className="targetHandle"
          style={targetHandleStyle}
          position={Position.Left}
          type="target"
        />
        {data.label}
      </div>
    </div>
  );
}
