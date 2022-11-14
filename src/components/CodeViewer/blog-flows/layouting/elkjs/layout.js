import ELK from 'elkjs';

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

const elk = new ELK();

const graph = {
  id: 'root',
  layoutOptions: { 'elk.algorithm': 'mrtree', 'elk.spacing.nodeNode': 80 },
  children: initialNodes.map((node) => ({ id: node.id, width: 100, height: 50 })),
  edges: initialEdges.map((edge) => ({
    id: edge.id,
    sources: [edge.source],
    targets: [edge.target],
  })),
};

export default async function createLayout() {
  const layout = await elk.layout(graph);
  return {
    nodes: layout.children.map((node) => ({
      id: node.id,
      position: { x: node.x, y: node.y },
      data: { label: node.id },
      style: { width: node.width, height: node.height },
    })),
    edges: initialEdges,
  };
}
