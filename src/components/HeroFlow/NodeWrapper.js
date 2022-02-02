import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

export default function NodeWrapper({ label, children }) {
  return (
    <Flex flexDirection="column" height="100%" borderRadius={8} overflow="hidden">
      <Box
        bgColor="gray.900"
        color="gray.100"
        fontWeight="normal"
        textTransform="uppercase"
        fontFamily="mono"
        fontSize={10}
        px={2}
        py={1}
      >
        {label}
      </Box>
      <Box flex="1" position="relative" p={2} bgColor="bgDark">
        {children}
      </Box>
    </Flex>
  );
}
