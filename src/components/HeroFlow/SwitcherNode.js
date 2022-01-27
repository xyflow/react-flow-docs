import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';

import Handle from './Handle';
import Wrapper from './NodeWrapper';

export default function SwitcherNode({ data }) {
  const { label = '', options = [], onChange = () => {} } = data;

  return (
    <Wrapper label={label}>
      <Handle type="source" position="right" />
      <ButtonGroup>
        {options.map((option) => (
          <Button key={option} onClick={() => onChange(option)}>
            {option}
          </Button>
        ))}
      </ButtonGroup>
    </Wrapper>
  );
}
