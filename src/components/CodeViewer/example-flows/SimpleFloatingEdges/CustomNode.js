import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';

export default memo(({ data }) => {
  return (
    <>
      {data.label}
      <Handle type="source" position="top" />
      <Handle type="source" position="right" />
      <Handle type="source" position="bottom" />
      <Handle type="source" position="left" />
    </>
  );
});
