import React, { useEffect, useMemo, useState, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  useReactFlow,
} from 'react-flow-renderer';
import styled from '@emotion/styled';
import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import HeroNode from './HeroNode';
import ColorPickerNode from './ColorPickerNode';
import SliderNode from './SliderNode';
import SwitcherNode from './SwitcherNode';
import SwoopyNode from './SwoopyNode';

const ExamplesButton = styled(Button)`
  &:hover {
  }
`;

const nodeTypes = {
  hero: HeroNode,
  colorpicker: ColorPickerNode,
  slider: SliderNode,
  switcher: SwitcherNode,
  swoopy: SwoopyNode,
};

const nodeStyle = {};
const isMobileFlow = typeof window !== 'undefined' && window.innerWidth < 992;
const isLargeFlow = typeof window !== 'undefined' && window.innerWidth > 1250;

function getNodePositions(headlineBounds) {
  const px = window.innerWidth * 0.05;
  const rfHeight = window.innerHeight * 0.8;
  const rfWidth = window.innerWidth;

  if (isMobileFlow) {
    const offsetY =
      headlineBounds.top + headlineBounds.height + (rfHeight - headlineBounds.height) / 2 - 125;

    return {
      hero: { x: rfWidth - 190 - px, y: offsetY + 15 },
      shape: { x: px + px / 4, y: offsetY - 4 },
      color: { x: px / 2, y: offsetY + 96 },
      zoom: { x: px, y: offsetY + 181 },
      swoopy1: { x: 40, y: -40 },
      swoopy2: { x: 160, y: 40 },
    };
  }

  if (isLargeFlow) {
    const offsetX = window.innerWidth / 2;
    const offsetY = headlineBounds.top;

    return {
      hero: { x: offsetX + 340, y: offsetY },
      shape: { x: offsetX + 10, y: offsetY - 60 },
      color: { x: offsetX - 50, y: offsetY + 60 },
      zoom: { x: offsetX + 30, y: offsetY + 190 },
      swoopy1: { x: 75, y: -35 },
      swoopy2: { x: 160, y: 40 },
    };
  }

  const offsetX = headlineBounds.left + headlineBounds.width + px;
  const offsetY = rfHeight / 2 - 150;

  return {
    hero: { x: rfWidth - px - 300, y: offsetY + 20 },
    shape: { x: offsetX, y: offsetY - 10 },
    color: { x: offsetX, y: offsetY + 100 },
    zoom: { x: offsetX, y: offsetY + 200 },
    swoopy1: { x: 75, y: -35 },
    swoopy2: { x: 160, y: 40 },
  };
}

const defaultNodes = [];

const defaultEdges = [
  {
    id: 'color->hero',
    source: 'color',
    target: 'hero',
    targetHandle: 'color',
    style: {
      stroke: '#A3ADB8',
      strokeWidth: 1.5,
    },
    animated: true,
  },
  {
    id: 'zoom->hero',
    source: 'zoom',
    target: 'hero',
    targetHandle: 'zoom',
    style: {
      stroke: '#A3ADB8',
      strokeWidth: 1.5,
    },
    animated: true,
  },
  {
    id: 'shape->hero',
    source: 'shape',
    target: 'hero',
    targetHandle: 'shape',
    style: {
      stroke: '#A3ADB8',
      strokeWidth: 1.5,
    },
    animated: true,
  },
];

function FlowViz({ headlineRef }) {
  const { setNodes } = useReactFlow();
  const reactFlowRef = useRef(null);
  const [headlineDimensions, setHeadlineDimensions] = useState(null);
  const [color, setColor] = useState('#FF5CA5');
  const [zoom, setZoom] = useState(12);
  const [shape, setShape] = useState('cube');

  useEffect(() => {
    if (headlineRef.current && reactFlowRef.current) {
      const headlineBbox = headlineRef.current.getBoundingClientRect();
      const rfBbox = reactFlowRef.current.getBoundingClientRect();
      setHeadlineDimensions({
        top: headlineBbox.top - rfBbox.top,
        left: headlineBbox.left - rfBbox.left,
        width: headlineBbox.width,
        height: headlineBbox.height,
      });
    }
  }, []);

  useEffect(() => {
    if (!headlineDimensions) {
      return;
    }

    const nodePositions = getNodePositions(headlineDimensions);

    setNodes([
      {
        id: 'hero',
        type: 'hero',
        position: nodePositions.hero,
        style: { width: isMobileFlow ? 180 : 300, ...nodeStyle },
        data: { color, zoom, shape, label: 'Output' },
      },
      {
        id: 'color',
        type: 'colorpicker',
        data: { color, onChange: setColor, label: 'Shape Color' },
        style: { ...nodeStyle, width: 150 },
        position: nodePositions.color,
      },
      {
        id: 'zoom',
        type: 'slider',
        data: { value: zoom, min: 0, max: 40, onChange: setZoom, label: 'Zoom Level' },
        style: { ...nodeStyle, width: 150 },
        position: nodePositions.zoom,
      },
      {
        id: 'shape',
        type: 'switcher',
        data: {
          value: shape,
          options: ['cube', 'pyramid'],
          onChange: setShape,
          label: 'Shape Type',
        },
        style: { ...nodeStyle, width: 150 },
        position: nodePositions.shape,
      },
      {
        id: 'swoopy1',
        type: 'swoopy',
        draggable: false,
        data: { label: 'custom node' },
        position: nodePositions.swoopy1,
        parentNode: 'shape',
      },
      {
        id: 'swoopy2',
        type: 'swoopy',
        draggable: false,
        data: { label: 'animated edge', swoopyDir: 'top' },
        position: nodePositions.swoopy2,
        parentNode: 'zoom',
      },
    ]);
  }, [headlineDimensions]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === 'color') {
          n.data = { ...n.data, value: color };
        }
        if (n.id === 'hero') {
          n.data = { ...n.data, color };
        }
        return n;
      })
    );
  }, [color]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === 'zoom') {
          n.data = { ...n.data, value: zoom };
        }
        if (n.id === 'hero') {
          n.data = { ...n.data, zoom };
        }
        return n;
      })
    );
  }, [zoom]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === 'shape') {
          n.data = { ...n.data, value: shape };
        }
        if (n.id === 'hero') {
          n.data = { ...n.data, shape };
        }
        return n;
      })
    );
  }, [shape]);

  return (
    <ReactFlow
      preventScrolling={false}
      zoomOnScroll={false}
      nodeTypes={nodeTypes}
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      ref={reactFlowRef}
    >
      <Background variant="dots" />
      <Controls showInteractive={false} />
    </ReactFlow>
  );
}

export default () => {
  const headlineRef = useRef();

  return (
    <ReactFlowProvider>
      <Box
        position="absolute"
        right={['5%', null, null, 'auto']}
        top={['20px', null, null, '50%']}
        left="5%"
        transform={[null, null, null, 'translate(0, -50%)']}
        maxWidth={500}
        ref={headlineRef}
        zIndex={5}
      >
        <Heading mb={6} size="2xl" fontWeight="black">
          Wire Your Ideas With React Flow
        </Heading>
        <Heading fontFamily="body" mb={5} color="gray.400" fontWeight="bold" size="md" mx="auto">
          A highly customizable React component for building node-based editors and interactive
          diagrams
        </Heading>
        <Flex>
          <Button mr={2} variant="primary" as="a" href="/docs/introduction" colorScheme="red">
            <Text as="span" fontFamily="mono" mr={2}>
              {'{}'}
            </Text>
            Documentation
          </Button>
          <Button
            _hover={{ svg: { transform: 'translate(5px, 0)' } }}
            variant="ghost"
            as="a"
            href="/docs/examples/overview"
          >
            Examples <ArrowForwardIcon transition="transform .2s" fontSize={19} ml={2} />
          </Button>
        </Flex>
      </Box>
      <BrowserOnly>{() => <FlowViz headlineRef={headlineRef} />}</BrowserOnly>
    </ReactFlowProvider>
  );
};
