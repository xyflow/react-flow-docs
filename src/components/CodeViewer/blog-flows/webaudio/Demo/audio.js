const context = new AudioContext();
const nodes = new Map();

export const suspendContext = () => context.suspend();
export const resumeContext = () => context.resume();
export const isSuspended = () => context.state === 'suspended';

export function addAudioNode({ id, type, data }) {
  switch (type) {
    case 'osc': {
      const node = new OscillatorNode(context);
      node.frequency.value = data.frequency;
      node.type = data.type;
      node.start();
      return nodes.set(id, node);
    }
    case 'amp': {
      const node = new GainNode(context);
      node.gain.value = data.gain;
      return nodes.set(id, node);
    }
    case 'dac': {
      const node = context.destination;
      return nodes.set(id, node);
    }
  }
}

export function updateAudioNode({ id, data }) {
  const node = nodes.get(id);

  Object.entries(data).forEach(([key, value]) => {
    if (key in node && node[key] instanceof AudioParam) {
      node[key].value = value;
    } else if (key in node) {
      node[key] = value;
    }
  });
}

export function removeAudioNode({ id }) {
  const node = nodes.get(id);
  node.disconnect();
  node.stop?.();
  nodes.delete(id);
}

export function connectAudioNodes({ source, target }) {
  nodes.get(source).connect(nodes.get(target));
}

export function disconnectAudioNodes({ source, target }) {
  nodes.get(source).disconnect(nodes.get(target));
}

export default {
  addAudioNode,
  updateAudioNode,
  removeAudioNode,
  connectAudioNodes,
  disconnectAudioNodes,
  suspendContext,
  resumeContext,
  isSuspended,
};
