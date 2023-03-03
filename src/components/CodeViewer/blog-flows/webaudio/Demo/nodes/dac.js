import { Handle, Position } from 'reactflow';

import React from 'react';
import { shallow } from 'zustand/shallow';
import useStore from '../store';

export default function Dac() {
  const { isSuspended, toggleDSP } = useStore(
    (store) => ({
      isSuspended: store.isSuspended,
      toggleDSP: store.toggleDSP,
    }),
    shallow
  );

  return (
    <>
      <div className="transition group px-2 py-3 bg-white rounded-xl shadow hover:shadow-xl">
        <Handle className="h-2 w-2" type="target" position={Position.Top} />

        <div className="flex flex-col p-2">
          <button onClick={toggleDSP}>
            {isSuspended ? (
              <span role="img" aria-label="unmute">
                🔇
              </span>
            ) : (
              <span role="img" aria-label="mute">
                🔈
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
