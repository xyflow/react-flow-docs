import {
  addAudioNode,
  connectAudioNodes,
  disconnectAudioNodes,
  isSuspended,
  removeAudioNode,
  resumeContext,
  suspendContext,
  updateAudioNode,
} from './audio';
import { applyEdgeChanges, applyNodeChanges } from 'reactflow';
import { nanoid } from 'nanoid';
import create from 'zustand';

const makeAmp = (id, position) => {
  const data = { gain: 0.5 };
  const node = { id, data, position, type: 'amp' };
  addAudioNode(node);

  return node;
};

const makeDac = (id, position) => {
  const data = {};
  const node = { id, data, position, type: 'dac' };
  addAudioNode(node);

  return node;
};

const makeOsc = (id, position) => {
  const data = { frequency: 220, type: 'sine' };
  const node = { id, data, position, type: 'osc' };
  addAudioNode(node);

  return node;
};

const defaultNodes = [
  makeOsc(nanoid(6), { x: -100, y: 0 }),
  makeAmp(nanoid(6), { x: 100, y: 200 }),
  makeDac(nanoid(6), { x: 0, y: 400 }),
];

const useStore = create((set, get) => ({
  // WEB AUDIO STATE & METHODS -------------------------------------------------
  isSuspended: isSuspended(),

  resume: async () => {
    await resumeContext();
    set({ isSuspended: isSuspended() });
  },

  suspend: async () => {
    await suspendContext();
    set({ isSuspended: isSuspended() });
  },

  toggleDSP: () => (get().isSuspended ? get().resume() : get().suspend()),

  // NODES STATE & METHODS -----------------------------------------------------
  nodes: defaultNodes,

  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onNodesDelete: (nodes) => {
    for (const { id } of nodes) {
      removeAudioNode({ id });
    }
  },

  addNode: (type) => {
    const id = nanoid(6);
    const position = { x: 0, y: 0 };

    switch (type) {
      case 'osc': {
        const node = makeOsc(id, position);
        return set({
          nodes: [...get().nodes, node],
        });
      }

      case 'amp': {
        const node = makeAmp(id, position);
        return set({
          nodes: [...get().nodes, node],
        });
      }

      case 'dac': {
        const node = makeDac(id, position);
        return set({
          nodes: [...get().nodes, node],
        });
      }
    }
  },

  updateNode: (id, data) => {
    updateAudioNode({ id, data });

    set({
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      ),
    });
  },

  // EDGES STATE & METHODS -----------------------------------------------------
  edges: [],

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onEdgesDelete: (edges) => {
    for (const { source, target } of edges) {
      disconnectAudioNodes({ source, target });
    }
  },

  addEdge: (data) => {
    connectAudioNodes({ source: data.source, target: data.target });

    const id = nanoid(6);
    const edge = { id, ...data };

    set({ edges: [...get().edges, edge] });
  },
}));

export default useStore;
