import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

export default function NodeWrapper({ label, children }) {
  return (
    <Flex
      flexDirection="column"
      height="100%"
      border="1px solid"
      borderColor="gray.600"
      borderRadius={4}
      overflow="hidden"
    >
      <Box
        backgroundColor="gray.600"
        color="white"
        fontWeight="bold"
        textTransform="uppercase"
        fontFamily="mono"
        fontSize={12}
        padding={1}
        border="1px solid"
        borderColor="gray.600"
      >
        {label}
      </Box>
      <Box flex="1" position="relative" padding={1} backgroundColor="#fff">
        {children}
      </Box>
    </Flex>
  );
}
