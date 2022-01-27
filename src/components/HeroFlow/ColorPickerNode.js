import React, { memo } from 'react';
import Handle from './Handle';
import Wrapper from './NodeWrapper';

export default memo(({ data }) => {
  const { label = '', onChange = () => {}, color = '#000' } = data;

  return (
    <Wrapper label={label}>
      <input
        className="nodrag"
        type="color"
        onChange={(evt) => onChange(evt.target.value)}
        defaultValue={color}
      />
      <Handle type="source" position="right" />
    </Wrapper>
  );
});
