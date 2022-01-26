import React from 'react';
import ReactFlow, { ReactFlowProvider, Background, Controls } from 'react-flow-renderer';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';

import HeroNode from './HeroNode';

const nodeTypes = {
  hero: HeroNode,
};

const nodes = [
  {
    id: 'hero',
    type: 'hero',
    position: { x: 100, y: 100 },
  },
  {
    id: 'fontSize',
    type: 'default',
    data: { label: 'fontSize' },
    position: { x: -20, y: 470 },
  },
  {
    id: 'text',
    type: 'default',
    data: { label: 'text' },
    position: { x: 840, y: 550 },
  },
  {
    id: 'bgColor',
    type: 'default',
    data: { label: 'bgColor' },
    position: { x: 150, y: -30 },
  },
  {
    id: 'darkMode',
    type: 'default',
    data: { label: 'darkMode' },
    position: { x: 600, y: 0 },
  },
];

const edges = [
  {
    id: 'fontSize->Hero',
    source: 'fontSize',
    target: 'hero',
    targetHandle: 'fontSize',
    type: 'smoothstep',
    style: {
      stroke: '#BDC4CC',
    },
    animated: true,
  },
  {
    id: 'text->Hero',
    source: 'text',
    target: 'hero',
    targetHandle: 'text',
    type: 'smoothstep',
    style: {
      stroke: '#BDC4CC',
    },
    animated: true,
  },
  {
    id: 'bgColor->Hero',
    source: 'bgColor',
    target: 'hero',
    targetHandle: 'bgColor',
    type: 'smoothstep',
    style: {
      stroke: '#BDC4CC',
    },
    animated: true,
  },
  {
    id: 'darkMode->Hero',
    source: 'darkMode',
    target: 'hero',
    targetHandle: 'darkMode',
    type: 'smoothstep',
    style: {
      stroke: '#BDC4CC',
    },
    animated: true,
  },
];

export default () => {
  return (
    <ReactFlowProvider>
      <Box
        position="absolute"
        right={['5%', null, null, '50%']}
        top="45%"
        left="5%"
        transform="translate(0, -50%)"
        maxWidth="container.md"
      >
        <Heading size="4xl" fontWeight="black">
          Wire Your Ideas With React Flow
        </Heading>
        <Heading color="gray.400" fontWeight="normal" size="ml" mx="auto">
          A highly customizable React component for building node-based editors and diagrams
        </Heading>
        <Flex>
          <Button colorScheme="red">Get Started</Button>
          <Button variant="ghost">Examples</Button>
        </Flex>
      </Box>
      <ReactFlow
        preventScrolling={false}
        zoomOnScroll={false}
        nodeTypes={nodeTypes}
        fitViewOnInit
        defaultNodes={nodes}
        defaultEdges={edges}
      >
        <Background variant="dots" />
        <Controls showInteractive={false} />
      </ReactFlow>
    </ReactFlowProvider>
  );
};
