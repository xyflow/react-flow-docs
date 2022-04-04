import React from 'react';
import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function ExampleFlow({ title, text, Flow, rtl = false, dark = false }) {
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
        <Text fontSize="lg" color="gray.600">
          {text}
        </Text>
        <Button variant="link" as="a" href="/docs/introduction" mb={2}>
          Documentation <ArrowForwardIcon fontSize={19} ml={2} />
        </Button>
      </Box>
      <Box
        width={['100%', null, null, '60%']}
        border="1px solid"
        borderColor={dark ? 'purple.900' : 'gray.100'}
        height={420}
        borderRadius="md"
        overflow="hidden"
        order={rtl ? 0 : 1}
        bgColor={dark ? 'purple.900' : 'white'}
        boxShadow="rgb(26 25 43 / 2%) 0px 2.8px 2.2px, rgb(26 25 43 / 2%) 0px 12.5px 10px, rgb(26 25 43 / 2%) 0px 22.3px 17.9px, rgb(26 25 43 / 3%) 0px 41.8px 33.4px, rgb(26 25 43 / 2%) 0px 100px 80px;"
      >
        <Flow />
      </Box>
    </Flex>
  );
}
