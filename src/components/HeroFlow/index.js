import React, { useEffect, useMemo, useState, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  useReactFlow,
} from 'react-flow-renderer';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';

import HeroNode from './HeroNode';
import ColorPickerNode from './ColorPickerNode';
import SliderNode from './SliderNode';
import SwitcherNode from './SwitcherNode';

const nodeTypes = {
  hero: HeroNode,
  colorpicker: ColorPickerNode,
  slider: SliderNode,
  switcher: SwitcherNode,
};

const nodeStyle = {};

const HERO_NODE_SIZE = 400;

function getHeroNodePosition() {
  if (typeof window !== 'undefined') {
    const x = window.innerWidth / 2 + (window.innerWidth / 2 - HERO_NODE_SIZE) / 2;
    const y = window.innerHeight * 0.4 - 200;

    return { x, y };
  }
  return { x: 0, y: 0 };
}

const defaultNodes = [];

const defaultEdges = [
  {
    id: 'color->hero',
    source: 'color',
    target: 'hero',
    style: {
      stroke: '#111',
      strokeWidth: 2.5,
    },
    animated: true,
  },
  {
    id: 'zoom->hero',
    source: 'zoom',
    target: 'hero',
    style: {
      stroke: '#111',
      strokeWidth: 2.5,
    },
    animated: true,
  },
  {
    id: 'shape->hero',
    source: 'shape',
    target: 'hero',
    style: {
      stroke: '#111',
      strokeWidth: 2.5,
    },
    animated: true,
  },
];

function FlowViz({ headlineRef }) {
  const { setNodes } = useReactFlow();
  const reactFlowRef = useRef(null);
  const [headlineDimensions, setHeadlineDimensions] = useState(null);
  const [color, setColor] = useState('#FF0072');
  const [zoom, setZoom] = useState(13);
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

    setNodes([
      {
        id: 'hero',
        type: 'hero',
        position: {
          x: headlineDimensions.left + headlineDimensions.width,
          y: headlineDimensions.top,
        },
        style: { width: 350, ...nodeStyle },
        data: { color, zoom, shape, label: 'Output' },
      },
      {
        id: 'color',
        type: 'colorpicker',
        data: { color, onChange: setColor, label: 'Shape Color' },
        style: { ...nodeStyle, width: 150 },
        position: { x: 0, y: 200 },
      },
      {
        id: 'zoom',
        type: 'slider',
        data: { value: zoom, min: 0, max: 40, onChange: setZoom, label: 'Zoom Level' },
        style: { ...nodeStyle, width: 150 },
        position: { x: 0, y: 400 },
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
        style: { ...nodeStyle },
        position: { x: 0, y: 0 },
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
        right={['5%', null, null, '50%']}
        top="50%"
        left="5%"
        transform="translate(0, -50%)"
        maxWidth="container.md"
        ref={headlineRef}
      >
        <Heading size="4xl" fontWeight="black">
          Wire Your Ideas With React Flow
        </Heading>
        <Heading color="gray.400" fontWeight="normal" size="ml" mx="auto">
          A highly customizable React component for building node-based editors and interactive
          diagrams
        </Heading>
        <Flex>
          <Button colorScheme="red">Get Started</Button>
          <Button variant="ghost">Examples</Button>
        </Flex>
      </Box>
      <BrowserOnly>{() => <FlowViz headlineRef={headlineRef} />}</BrowserOnly>
    </ReactFlowProvider>
  );
};
