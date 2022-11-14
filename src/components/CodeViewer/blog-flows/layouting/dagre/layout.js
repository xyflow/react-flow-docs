import dagre from 'dagre';

const initialNodes = [
  {
    id: 'A',
  },
  {
    id: 'B',
  },
  {
    id: 'C',
  },
  {
    id: 'D',
  },
  {
    id: 'E',
  },
  {
    id: 'F',
  },
  {
    id: 'G',
  },
  {
    id: 'H',
  },
  {
    id: 'I',
  },
];

const initialEdges = [
  { id: '1', source: 'A', target: 'B' },
  { id: '2', source: 'A', target: 'C' },
  { id: '3', source: 'A', target: 'D' },
  { id: '4', source: 'D', target: 'E' },
  { id: '5', source: 'C', target: 'H' },
  { id: '6', source: 'E', target: 'F' },
  { id: '7', source: 'E', target: 'G' },
  { id: '8', source: 'C', target: 'I' },
];

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
dagreGraph.setGraph({ rankdir: 'TB' });

initialNodes.forEach((node) => {
  dagreGraph.setNode(node.id, {
    width: 100,
    height: 50,
  });
});

initialEdges.forEach((edge) => {
  dagreGraph.setEdge(edge.source, edge.target);
});

dagre.layout(dagreGraph);

export const nodes = dagreGraph.nodes().map((nodeId) => {
  const { x, y } = dagreGraph.node(nodeId);

  return {
    id: nodeId,
    position: { x: x, y: y },
    data: { label: nodeId },
    style: { width: 100, height: 50 },
  };
});

export const edges = initialEdges;
