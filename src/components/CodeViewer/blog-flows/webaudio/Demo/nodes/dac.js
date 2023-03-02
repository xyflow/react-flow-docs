import { Handle, Position } from 'reactflow';

import React from 'react';
import { shallow } from 'zustand/shallow';
import useStore from '../store';

export default function Dac() {
  const { state, toggleState } = useStore(
    (store) => ({
      state: store.state,
      toggleState: store.toggleState,
    }),
    shallow
  );

  return (
    <>
      <Handle className="h-2 w-2" type="target" position={Position.Top} />
      <div className="transition group px-2 py-3 bg-white rounded-xl shadow hover:shadow-xl">
        <div className="flex flex-col p-2">
          <button onClick={toggleState}>
            {state === 'running' ? (
              <span role="img" aria-label="mute">
                🔈
              </span>
            ) : (
              <span role="img" aria-label="unmute">
                🔇
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
