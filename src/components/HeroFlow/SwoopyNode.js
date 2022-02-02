import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

export default function SwoopyNode({ data }) {
  return (
    <Flex
      fontSize={14}
      fontFamily="mono"
      alignItems={data.swoopyDir === 'top' ? 'flex-end' : 'flex-start'}
      color="gray.500"
    >
      <Box
        transform={data.swoopyDir === 'top' ? 'rotate(180deg) scale(-1, 1)' : 'none'}
        fontSize={28}
        fontWeight="bold"
      >
        ⤹
      </Box>
      <Box ml={1}>{data.label}</Box>
    </Flex>
  );
}
