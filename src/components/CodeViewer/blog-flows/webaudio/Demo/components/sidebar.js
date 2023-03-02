import React from 'react';
import { makeAmp } from '../nodes/amp';
import { makeOsc } from '../nodes/osc';
import { shallow } from 'zustand/shallow';
import useStore from '../store';

const types = ['osc', 'amp', 'dac'];

export default function Sidebar() {
  const { addNode } = useStore((store) => ({ addNode: store.addNode }), shallow);

  return (
    <aside className="bg-white rounded shadow">
      <ul className="flex items-center text-sm">
        {types.map((type, i) => {
          const isFirst = i == 0;
          const isLast = i == types.length - 1;
          const round = isFirst ? 'rounded-l' : isLast ? 'rounded-r' : '';

          return (
            <>
              <li key={type} className="">
                <NewNodeButton type={type} round={round} />
              </li>
              {isLast ? null : <span className="w-px h-3 bg-gray-200" />}
            </>
          );
        })}
      </ul>
    </aside>
  );
}

function NewNodeButton({ type, round }) {
  const { addNode } = useStore((store) => ({ addNode: store.addNode }), shallow);

  return (
    <button
      className={`transition hover:bg-[#ff0072] hover:text-white w-full px-4 ${round}`}
      onClick={() => addNode(type)}
    >
      {type}
    </button>
  );
}
