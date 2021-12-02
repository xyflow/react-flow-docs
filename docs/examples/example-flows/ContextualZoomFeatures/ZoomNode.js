import React, { memo } from 'react';

import { Handle, useStoreState } from 'react-flow-renderer';

const Placeholder = () => (
  <div className="placeholder">
    <div />
    <div />
    <div />
  </div>
);

export default memo(({ data }) => {
  const [, , zoom] = useStoreState((state) => state.transform);
  const showContent = zoom >= 1.5;

  return (
    <>
      <Handle type="target" position="left" />
      {showContent ? data.content : <Placeholder />}
      <Handle type="source" position="right" />
    </>
  );
});
