import React, { useCallback } from 'react';
import ReactFlow, {
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from 'reactflow';

import 'reactflow/dist/base.css';
import './index.css';
import TurboNode, { TurboNodeData } from './TurboNode';
import TurboEdge from './TurboEdge';

const initialNodes: Node<TurboNodeData>[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { icon: 'base style 1', title: 'readFile', subline: 'api.ts' },
    type: 'turbo',
    className: 'gradient',
  },
  {
    id: '2',
    position: { x: 250, y: 0 },
    data: { icon: 'base style 1', title: 'bundle', subline: 'apiContents' },
    type: 'turbo',
    className: 'gradient',
  },
  {
    id: '3',
    position: { x: 0, y: 250 },
    data: { icon: 'base style 1', title: 'readFile', subline: 'sdk.ts' },
    type: 'turbo',
    className: 'gradient',
  },
  {
    id: '4',
    position: { x: 250, y: 250 },
    data: { icon: 'base style 1', title: 'bundle', subline: 'sdkContents' },
    type: 'turbo',
    className: 'gradient',
  },
  {
    id: '5',
    position: { x: 500, y: 125 },
    data: { icon: 'base style 1', title: 'concat', subline: 'api, sdk' },
    type: 'turbo',
    className: 'gradient',
  },
  {
    id: '6',
    position: { x: 750, y: 125 },
    data: { icon: 'base style 1', title: 'fullBundle' },
    type: 'turbo',
    className: 'gradient',
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
  },
];

const nodeTypes = {
  turbo: TurboNode,
};

const edgeTypes = {
  turbo: TurboEdge,
};

const defaultEdgeOptions = {
  type: 'turbo',
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
    >
      <Controls />
      <MiniMap />
      <svg>
        <defs>
          <linearGradient id="edge-gradient">
            <stop offset="0%" stopColor="#a853ba" />
            <stop offset="100%" stopColor="#2a8af6" />
          </linearGradient>
        </defs>
      </svg>
    </ReactFlow>
  );
};

export default Flow;
