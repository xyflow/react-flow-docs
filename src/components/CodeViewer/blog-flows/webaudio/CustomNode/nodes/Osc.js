import React from 'react';
import { Handle } from 'reactflow';
import { shallow } from 'zustand/shallow';

import { useStore } from '../store';

const selector = (id) => (store) => ({
  setFrequency: (e) => store.updateNode(id, { frequency: +e.target.value }),
  setType: (e) => store.updateNode(id, { type: e.target.value }),
});

export default function Osc({ id, data }) {
  const { setFrequency, setType } = useStore(selector(id), shallow);

  return (
    <div className="custom-node">
      <p className="name">Oscillator</p>

      <hr />

      <label className="control">
        <span className="name">Frequency</span>
        <input
          className="nodrag"
          type="range"
          min="10"
          max="1000"
          value={data.frequency}
          onChange={setFrequency}
        />
        <span className="value">{data.frequency}Hz</span>
      </label>

      <hr />

      <label className="control">
        <span className="name">Waveform</span>
        <select className="nodrag" value={data.type} onChange={setType}>
          <option value="sine">sine</option>
          <option value="triangle">triangle</option>
          <option value="sawtooth">sawtooth</option>
          <option value="square">square</option>
        </select>
      </label>

      <Handle type="source" position="bottom" />
    </div>
  );
}
