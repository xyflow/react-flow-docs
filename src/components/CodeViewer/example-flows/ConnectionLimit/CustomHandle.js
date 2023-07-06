import React, { useCallback, useMemo } from 'react';
import { getConnectedEdges, Handle, useNodeId, useStore } from 'reactflow';

const selector =
  (nodeId, isConnectable = true, maxConnections = Infinity) =>
  (s) => {
    // If the user props say this handle is not connectable, we don't need to
    // bother checking anything else.
    if (!isConnectable) return false;

    const node = s.nodeInternals.get(nodeId);
    const connectedEdges = getConnectedEdges([node], s.edges);

    return connectedEdges.length < maxConnections;
  };

const CustomHandle = (props) => {
  const nodeId = useNodeId();
  const isConnectable = useStore(
    useCallback(selector(nodeId, props.isConnectable, props.maxConnections), [
      nodeId,
      props.isConnectable,
      props.maxConnections,
    ])
  );

  // The `isConnectable` prop is a part of React Flow, all we need to do is give
  // it the bool we calculated above and React Flow can handle the logic to disable
  // it for us.
  return <Handle {...props} type="target" isConnectable={isConnectable} />;
};

export default CustomHandle;
