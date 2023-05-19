import { initialNodes, initialEdges } from './nodes-edges.js';
import ELK from 'elkjs/lib/elk.bundled.js';
import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { addEdge, Panel, useNodesState, useEdgesState } from 'reactflow';

import 'reactflow/dist/style.css';

const elk = new ELK();

const useLayoutedElements = (nodes, edges, options = {}) => {
  const [layoutedNodes, setLayoutedNodes] = useNodesState([]);
  const [layoutedEdges, setLayoutedEdges] = useEdgesState([]);

  useEffect(() => {
    const isHorizontal = options?.['elk.direction'] === 'RIGHT';
    const graph = {
      id: 'root',
      layoutOptions: options,
      children: nodes.map((node) => ({
        ...node,
        // Adjust the target and source handle positions based on the layout
        // direction.
        targetPosition: isHorizontal ? 'left' : 'top',
        sourcePosition: isHorizontal ? 'right' : 'bottom',

        // Hardcode a width and height for elk to use when layouting.
        width: 150,
        height: 50,
      })),
      edges: edges,
    };

    elk
      .layout(graph)
      .then((layoutedGraph) => {
        setLayoutedNodes(
          layoutedGraph.children.map((node) => ({
            ...node,
            // React Flow expects a position property on the node instead of `x`
            // and `y` fields.
            position: { x: node.x, y: node.y },
          }))
        );
        setLayoutedEdges(layoutedGraph.edges);
      })
      .catch(console.error);
  }, [nodes, edges, options]);

  return { nodes: layoutedNodes, edges: layoutedEdges };
};

export default function LayoutFlow() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [options, setOptions] = useState({
    'elk.algorithm': 'layered',
    'elk.direction': 'DOWN',
    'elk.layered.spacing.nodeNodeBetweenLayers': '100',
    'elk.spacing.nodeNode': '80',
  });

  const { nodes: layoutedNodes, edges: layoutedEdges } = useLayoutedElements(nodes, edges, options);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={layoutedNodes}
      edges={layoutedEdges}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Panel position="top-right">
        <button onClick={() => setOptions((options) => ({ ...options, 'elk.direction': 'DOWN' }))}>
          vertical layout
        </button>

        <button onClick={() => setOptions((options) => ({ ...options, 'elk.direction': 'RIGHT' }))}>
          horizontal layout
        </button>
      </Panel>
    </ReactFlow>
  );
}
