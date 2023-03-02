import { applyEdgeChanges, applyNodeChanges } from 'reactflow';

import create from 'zustand';
import { nanoid } from 'nanoid';

const context = new AudioContext();
context.suspend();

const makeAmp = (id, position) => {
  const data = { gain: 0.5 };
  const node = { id, data, position, type: 'amp' };
  const audioNode = context.createGain();

  audioNode.gain.value = data.gain;
  return [node, audioNode];
};

const makeDac = (id, position) => {
  const data = {};
  const node = { id, data, position, type: 'dac' };
  const audioNode = context.destination;

  return [node, audioNode];
};

const makeOsc = (id, position) => {
  const data = { frequency: 220, type: 'sine' };
  const node = { id, data, position, type: 'osc' };
  const audioNode = context.createOscillator();

  audioNode.frequency.value = data.frequency;
  audioNode.type = data.type;
  audioNode.start();
  return [node, audioNode];
};

const defaultNodes = [
  makeOsc(nanoid(6), { x: -100, y: 0 }),
  makeAmp(nanoid(6), { x: 100, y: 200 }),
  makeDac(nanoid(6), { x: 0, y: 400 }),
];

const useStore = create((set, get) => ({
  // WEB AUDIO STATE & METHODS -------------------------------------------------
  context: context,
  audioNodes: defaultNodes.reduce((map, [{ id }, node]) => map.set(id, node), new Map()),
  state: context.state,

  resume: async () => {
    await context.resume();
    set({ state: context.state });
  },

  suspend: async () => {
    await context.suspend();
    set({ state: context.state });
  },

  toggleState: async () => {
    switch (get().state) {
      case 'running':
        return get().suspend();
      case 'suspended':
        return get().resume();
    }
  },

  // NODES STATE & METHODS -----------------------------------------------------
  nodes: defaultNodes.map(([node]) => node),

  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  addNode: (type) => {
    const id = nanoid(6);
    const position = { x: 0, y: 0 };

    switch (type) {
      case 'osc': {
        const [node, audioNode] = makeOsc(id, position);
        return set({
          nodes: [...get().nodes, node],
          audioNodes: get().audioNodes.set(id, audioNode),
        });
      }

      case 'amp': {
        const [node, audioNode] = makeAmp(id, position);

        return set({
          nodes: [...get().nodes, node],
          audioNodes: get().audioNodes.set(id, audioNode),
        });
      }

      case 'dac': {
        const [node, audioNode] = makeDac(id, position);

        return set({
          nodes: [...get().nodes, node],
          audioNodes: get().audioNodes.set(id, audioNode),
        });
      }
    }
  },

  updateNode: (id, data) => {
    const audioNode = get().audioNodes.get(id);

    Object.entries(data).forEach(([key, value]) => {
      if (key in audioNode && audioNode[key] instanceof AudioParam) {
        audioNode[key].value = value;
      } else if (key in audioNode) {
        audioNode[key] = value;
      }
    });

    set({
      audioNodes: get().audioNodes.set(id, audioNode),
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      ),
    });
  },

  // EDGES STATE & METHODS -----------------------------------------------------
  edges: [],

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(
        changes.map((change) => {
          switch (change.type) {
            case 'remove': {
              const [sourceId, targetId] = change.id.split('->');
              const source = get().audioNodes.get(sourceId);
              const target = get().audioNodes.get(targetId);

              source.disconnect(target);
              return change;
            }

            default:
              return change;
          }
        }),
        get().edges
      ),
    });
  },

  addEdge: (data) => {
    const source = get().audioNodes.get(data.source);
    const target = get().audioNodes.get(data.target);

    source.connect(target);

    const id = `${data.source}->${data.target}`;
    const edge = { id, ...data };

    set({ edges: [...get().edges, edge] });
  },
}));

export default useStore;
