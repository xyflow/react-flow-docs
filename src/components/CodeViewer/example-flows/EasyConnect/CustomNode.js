import { Handle, Position, useStore } from 'reactflow';

const connectionNodeIdSelector = (state) => state.connectionNodeId;

export default function CustomNode({ id, isConnectable }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);
  const endHandle = useStore((s) => s.connectionEndHandle);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;

  const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };
  const label = isTarget ? 'Drop here' : 'Drag to connect';

  console.log(isConnecting, endHandle);

  return (
    <div className="customNode">
      <div
        className="customNodeBody"
        style={{
          borderStyle: isTarget ? 'dashed' : 'solid',
          backgroundColor: isTarget ? '#ffcce3' : '#ccd9f6',
        }}
      >
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
          isConnectableStart={false}
        />
        {label}
      </div>
    </div>
  );
}
