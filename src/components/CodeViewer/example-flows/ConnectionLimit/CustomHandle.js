import React, { useMemo } from 'react';
import { getConnectedEdges, Handle, useNodeId, useStore } from 'reactflow';

const selector = (s) => ({
  nodeInternals: s.nodeInternals,
  edges: s.edges,
});

const CustomHandle = (props) => {
  const { nodeInternals, edges } = useStore(selector);
  const nodeId = useNodeId();

  const isConnectable = useMemo(() => {
    const node = nodeInternals.get(nodeId);
    const connectedEdges = getConnectedEdges([node], edges);
    const maxConnections = props.maxConnections ?? Infinity;

    // The `isConnectable` prop can be passed to any Handle to enable/disable
    // it: it's part of React Flow!
    //
    // https://reactflow.dev/docs/api/nodes/handle/#isconnectable
    return props.isConnectable && connectedEdges.length < maxConnections;
  }, [nodeInternals, edges, nodeId, props.isConnectable, props.maxConnections]);

  return <Handle {...props} type="target" isConnectable={isConnectable}></Handle>;
};

export default CustomHandle;
