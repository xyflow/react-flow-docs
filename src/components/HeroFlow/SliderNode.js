import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import React from 'react';
import Handle from './Handle';
import Wrapper from './NodeWrapper';

export default function SliderNode({ data }) {
  const { label = '', min = 0, max = 1, onChange = () => {}, value = 0.5 } = data;

  return (
    <Wrapper label={label}>
      <Handle type="source" position="right" />
      <Box pl={1} pr={4}>
        <Slider
          className="nodrag"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          aria-label="zoom-slider"
          isReversed
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Wrapper>
  );
}
