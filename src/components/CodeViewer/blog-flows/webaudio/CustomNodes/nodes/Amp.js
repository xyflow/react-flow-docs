import React from 'react';
import { Handle } from 'reactflow';
import { shallow } from 'zustand/shallow';

import { useStore } from '../store';

const selector = (id) => (store) => ({
  setGain: (e) => store.updateNode(id, { gain: +e.target.value }),
});

export default function Osc({ id, data }) {
  const { setGain } = useStore(selector(id), shallow);

  return (
    <div className="custom-node">
      <Handle type="target" position="top" />

      <p className="name">Amp</p>

      <hr />

      <label className="control">
        <span className="name">Gain</span>
        <input
          className="nodrag"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={data.gain}
          onChange={setGain}
        />
        <span className="value">{data.gain.toFixed(2)}</span>
      </label>

      <hr />

      <Handle type="source" position="bottom" />
    </div>
  );
}
