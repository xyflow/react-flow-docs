import React from 'react';
import { RadioGroup, Radio, Stack, Text } from '@chakra-ui/react';

import Handle from './Handle';
import Wrapper from './NodeWrapper';

export default function SwitcherNode({ data }) {
  const { label = '', options = [], onChange = () => {}, value } = data;

  return (
    <Wrapper label={label}>
      <Handle type="source" position="right" />
      <RadioGroup fontFamily="mono" value={value} onChange={onChange}>
        <Stack direction="row">
          {options.map((option) => (
            <Radio size="sm" key={option} value={option}>
              <Text fontSize="11" fontFamily="mono" as="span">
                {option}
              </Text>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Wrapper>
  );
}
