import React, { memo } from 'react';
import { Handle, useStore } from 'react-flow-renderer';

const Placeholder = () => (
  <div className="placeholder">
    <div />
    <div />
    <div />
  </div>
);

const zoomSelector = (s) => s.transform[2];

export default memo(({ data }) => {
  const zoom = useStore(zoomSelector);
  const showContent = zoom >= 1.5;

  return (
    <>
      <Handle type="target" position="left" />
      {showContent ? data.content : <Placeholder />}
      <Handle type="source" position="right" />
    </>
  );
});
