import React from 'react';
import Handle from './Handle';
import Wrapper from './NodeWrapper';

export default function SliderNode({ data }) {
  const { label = '', min = 0, max = 1, onChange = () => {}, value = 0.5 } = data;

  return (
    <Wrapper label={label}>
      <Handle type="source" position="right" />
      <input
        min={min}
        max={max}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        type="range"
        className="nodrag"
      />
    </Wrapper>
  );
}
