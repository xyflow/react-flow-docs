import { applyNodeChanges, applyEdgeChanges } from 'reactflow';
import create from 'zustand';

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],

  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange(changes) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  addEdge(data) {
    const id = `${data.target}->${data.source}`;
    const edge = { id, ...data };

    set({
      edges: [...get().edges, edge],
    });
  },
}));
