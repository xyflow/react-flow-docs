import { Handle, Position } from 'reactflow';
import React from 'react';
import useStore from '../store';

export const makeOsc = (id, position, ctx) => {
  const node = ctx.createOscillator();
  node.start();

  return { id, type: 'osc', data: { node, freq: 220, type: 'square' }, position };
};

export default function Osc({ id, data }) {
  const { setFreq, setType } = useStore((state) => ({
    setFreq: (frequency) => state.updateNode(id, { frequency }),
    setType: (type) => state.updateNode(id, { type }),
  }));

  return (
    <>
      <div className="transition group px-2 py-3 bg-white rounded-xl shadow hover:shadow-xl">
        <div className="flex flex-col p-2">
          <span className="font-bold">osc</span>
          <hr className="transition group-hover:bg-[#ff0072] mb-4" />
          <label className="grid grid-cols-5 items-center gap-1">
            <span className="col-span-1">freq: </span>
            <input
              className="nodrag col-span-3"
              type="range"
              min="10"
              max="2000"
              step="0.1"
              value={data.frequency}
              onChange={(e) => {
                const value = Number(e.target.value);
                setFreq(value);
              }}
            />
            <span className="col-span-1 text-right text-xs text-gray-400">
              {data.frequency.toFixed(0)}Hz
            </span>
          </label>

          <label className="grid grid-cols-5 gap-2">
            <span className="col-span-1">type: </span>
            <select
              className="nodrag col-span-3"
              value={data.type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="sine">sine</option>
              <option value="square">square</option>
              <option value="sawtooth">sawtooth</option>
              <option value="triangle">triangle</option>
            </select>
          </label>
        </div>
      </div>

      <Handle className="w-2 h-2" type="source" position={Position.Bottom} />
    </>
  );
}
