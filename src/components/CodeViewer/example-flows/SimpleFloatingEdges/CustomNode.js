import React, { memo } from 'react';
import { Handle } from 'reactflow';

export default memo(({ data }) => {
  return (
    <>
      {data.label}
      <Handle type="source" position="top" id="a" />
      <Handle type="source" position="right" id="b" />
      <Handle type="source" position="bottom" id="c" />
      <Handle type="source" position="left" id="d" />
    </>
  );
});
