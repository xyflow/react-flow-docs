import { stratify, tree } from 'd3-hierarchy';

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

const layout = tree().nodeSize([150, 100]);

const hierarchy = stratify()
  .id((d) => d.id)
  .parentId((d) => initialEdges.find((e) => e.target === d.id)?.source)(initialNodes);

export const nodes = layout(hierarchy)
  .descendants()
  .map((node) => ({
    id: node.data.id,
    position: { x: node.x, y: node.y },
    data: { label: node.data.id },
    style: { width: 100, height: 50 },
  }));
export const edges = initialEdges;
