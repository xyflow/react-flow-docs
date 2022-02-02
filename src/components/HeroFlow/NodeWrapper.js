import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

export default function NodeWrapper({ label, children }) {
  return (
    <Flex
      flexDirection="column"
      height="100%"
      border="1px solid"
      borderColor="gray.300"
      borderRadius={8}
      overflow="hidden"
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    >
      <Box
        bgColor="#fefefe"
        color="gray.900"
        fontWeight="normal"
        textTransform="uppercase"
        fontFamily="mono"
        fontSize={10}
        px={2}
        py={1}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        {label}
      </Box>
      <Box flex="1" position="relative" bgColor="white">
        {children}
      </Box>
    </Flex>
  );
}
