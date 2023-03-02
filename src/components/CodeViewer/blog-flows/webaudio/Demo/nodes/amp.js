import { Handle, Position } from 'reactflow';
import React, { useCallback, useState } from 'react';
import useStore from '../store';

export default function Amp({ id, data }) {
  const setGain = useStore((state) => (gain) => state.updateNode(id, { gain }));

  return (
    <>
      <Handle className="w-2 h-2" type="target" position={Position.Top} />

      <div className="transition group px-2 py-3 bg-white rounded-xl shadow hover:shadow-xl">
        <div className="flex flex-col p-2">
          <span className="font-bold">amp</span>
          <hr className="transition group-hover:bg-[#ff0072] mb-4" />
          <label className="grid grid-cols-5 items-center gap-1">
            <span className="col-span-1">gain: </span>
            <input
              className="nodrag col-span-3"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={data.gain}
              onChange={(e) => {
                const value = Number(e.target.value);
                setGain(value);
              }}
            />
            <span className="col-span-1 text-right text-xs text-gray-400">
              {data.gain.toFixed(2)}
            </span>
          </label>
        </div>
      </div>

      <Handle className="w-2 h-2" type="source" position={Position.Bottom} />
    </>
  );
}
