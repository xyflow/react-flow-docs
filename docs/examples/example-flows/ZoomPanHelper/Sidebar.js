import React from 'react';
import { useStore, useZoomPanHelper } from 'react-flow-renderer';

export default () => {
  const store = useStore();
  const { zoomIn, zoomOut, setCenter } = useZoomPanHelper();

  const focusNode = () => {
    const { nodes } = store.getState();

    if (nodes.length) {
      const node = nodes[0];

      const x = node.__rf.position.x + node.__rf.width / 2;
      const y = node.__rf.position.y + node.__rf.height / 2;
      const zoom = 1.85;

      setCenter(x, y, zoom);
    }
  };

  return (
    <aside>
      <div className="description">
        This is an example of how you can use the zoom pan helper hook
      </div>
      <button onClick={focusNode}>focus node</button>
      <button onClick={zoomIn}>zoom in</button>
      <button onClick={zoomOut}>zoom out</button>
    </aside>
  );
};
