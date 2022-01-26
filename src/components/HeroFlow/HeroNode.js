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
      <Handle type="target" position="left" id="fontSize" />
      <Handle type="target" position="bottom" id="text" />
      <Handle style={{ marginLeft: -100 }} type="target" position="top" id="bgColor" />
      <Handle style={{ marginLeft: 100 }} type="target" position="top" id="darkMode" />
    </Box>
  );
}
