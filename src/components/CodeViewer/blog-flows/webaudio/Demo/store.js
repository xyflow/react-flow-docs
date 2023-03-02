import { applyEdgeChanges, applyNodeChanges } from 'reactflow';

import create from 'zustand';
import { nanoid } from 'nanoid';

const context = new AudioContext();
context.suspend();

const makeAmp = (id, position) => {
  return { id, data: { gain: 0.5 }, position, type: 'amp' };
};

const makeDac = (id, position) => {
  return { id, data: {}, position, type: 'dac' };
};

const makeOsc = (id, position) => {
  return { id, type: 'osc', data: { frequency: 220, type: 'square' }, position };
};

const defaultNodes = [
  makeOsc(nanoid(6), { x: -100, y: 0 }),
  makeAmp(nanoid(6), { x: 100, y: 200 }),
  makeDac(nanoid(6), { x: 0, y: 400 }),
];

const defaultAudioNodes = defaultNodes.reduce((audioNodes, { id, type, data }) => {
  switch (type) {
    case 'osc': {
      const node = context.createOscillator();
      node.frequency.value = data.frequency;
      node.type = data.type;
      node.start();
      return audioNodes.set(id, node);
    }

    case 'amp': {
      const node = context.createGain();
      node.gain.value = data.gain;
      return audioNodes.set(id, node);
    }

    case 'dac': {
      const node = context.destination;
      return audioNodes.set(id, node);
    }
  }
}, new Map());

const useStore = create((set, get) => ({
  // WEB AUDIO STATE & METHODS -------------------------------------------------
  context: context,
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

  audioNodes: defaultAudioNodes,

  // NODES STATE & METHODS -----------------------------------------------------
  nodes: defaultNodes,

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
        const node = makeOsc(id, position);
        const audioNode = context.createOscillator();
        audioNode.frequency.value = node.data.frequency;
        audioNode.type = node.data.type;
        audioNode.start();

        return set({
          nodes: [...get().nodes, node],
          audioNodes: get().audioNodes.set(id, audioNode),
        });
      }

      case 'amp': {
        const node = makeAmp(id, position);
        const audioNode = context.createGain();
        audioNode.gain.value = data.gain;

        return set({
          nodes: [...get().nodes, node],
          audioNodes: get().audioNodes.set(id, audioNode),
        });
      }

      case 'dac': {
        const node = makeDac(id, position);
        const audioNode = context.destination;

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
