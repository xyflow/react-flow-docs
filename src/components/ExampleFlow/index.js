import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';

export default function ExampleFlow({ title, text, Flow, rtl = false, color = 'gray' }) {
  const borderColor = `${color}.500`;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      maxWidth="container.xl"
      mx="auto"
      flexWrap="wrap"
      px={3}
      py={90}
    >
      <Box order={rtl ? 1 : 0} width={['100%', null, null, '35%']}>
        <Heading fontFamily="body" fontWeight="black" size="xl">
          {title}
        </Heading>
        <Heading fontFamily="body" size="md" mx="auto" color="gray.300" fontWeight="bold">
          {text}
        </Heading>
      </Box>
      <Box
        width={['100%', null, null, '60%']}
        border="1px solid"
        height={420}
        borderRadius="md"
        overflow="hidden"
        order={rtl ? 0 : 1}
      >
        <Flow />
      </Box>
    </Flex>
  );
}
