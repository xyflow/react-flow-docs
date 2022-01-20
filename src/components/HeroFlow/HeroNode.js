import React from 'react';
import { Heading, Box, Flex, Button } from '@chakra-ui/react';
import { Handle } from 'react-flow-renderer';

export default function HeroNode() {
  return (
    <Box
      width="container.md"
      borderRadius="base"
      borderColor="gray.200"
      borderWidth="1px"
      borderStyle="solid"
      bgColor="white"
      p={5}
    >
      <Heading textAlign="center" size="4xl" fontWeight="black">
        Wire Your Ideas With React Flow
      </Heading>
      <Heading color="gray.400" fontWeight="normal" size="ml" maxWidth="container.sm" mx="auto" textAlign="center">
        A highly customizable React component for building node-based editors and diagrams
      </Heading>
      <Flex justifyContent="center">
        <Button colorScheme="red">Get Started</Button>
        <Button variant="ghost">Examples</Button>
      </Flex>
      <Handle type="target" position="left" id="fontSize" />
      <Handle type="target" position="bottom" id="text" />
      <Handle style={{ marginLeft: -100 }} type="target" position="top" id="bgColor" />
      <Handle style={{ marginLeft: 100 }} type="target" position="top" id="darkMode" />
    </Box>
  );
}
