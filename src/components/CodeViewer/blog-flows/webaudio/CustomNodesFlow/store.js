import { applyNodeChanges, applyEdgeChanges } from 'reactflow';
import { nanoid } from 'nanoid';
import create from 'zustand';

const makeAmp = (id, position) => {
  const data = { gain: 0.5 };
  return { id, data, position, type: 'amp' };
};

const makeDac = (id, position) => {
  const data = {};
  return { id, data, position, type: 'dac' };
};

const makeOsc = (id, position) => {
  const data = { freq: 220, type: 'square' };
  return { id, data, position, type: 'osc' };
};

export const useStore = create((set, get) => ({
  nodes: [
    makeOsc(nanoid(6), { x: -100, y: 0 }),
    makeAmp(nanoid(6), { x: 100, y: 200 }),
    makeDac(nanoid(6), { x: 0, y: 400 }),
  ],
  edges: [],

  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  updateNode(id, data) {
    set({ nodes: get().nodes.map((node) => (node.id === id ? { ...node, data } : node)) });
  },

  onEdgesChange(changes) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  addEdge(data) {
    const id = nanoid(6);
    const edge = { id, ...data };

    set({
      edges: [...get().edges, edge],
    });
  },
}));
