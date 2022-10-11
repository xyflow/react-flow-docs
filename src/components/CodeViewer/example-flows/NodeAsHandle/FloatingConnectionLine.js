import React from 'react';
import { MarkerType, getStraightPath, getMarkerEnd } from 'reactflow';

import { getEdgeParams } from './utils.js';

function FloatingConnectionLine({ toX, toY, fromNode, connectionLineStyle }) {
  if (!fromNode) {
    return null;
  }

  const targetNode = {
    id: 'connection-target',
    width: 1,
    height: 1,
    positionAbsolute: { x: toX, y: toY },
    position: { x: toX, y: toY },
  };

  const { sx, sy } = getEdgeParams(fromNode, targetNode);

  const [edgePath] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: toX,
    targetY: toY,
  });

  return (
    <g>
      <path
        style={connectionLineStyle}
        fill="none"
        d={edgePath}
        markerEnd={getMarkerEnd(MarkerType.ArrowClosed)}
      />
      <circle cx={toX} cy={toY} fill="black" r={3} stroke="black" strokeWidth={1.5} />
    </g>
  );
}

export default FloatingConnectionLine;
