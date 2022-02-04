import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';

import HeroFlow from '../components/HeroFlow';
import ExampleFlow from '../components/ExampleFlow';
import ExampleFlowA from '../components/ExampleFlow/A';
import ExampleFlowB from '../components/ExampleFlow/B';
import ExampleFlowC from '../components/ExampleFlow/C';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Box height={['80vh', null, null, 580]} position="relative">
        <HeroFlow />
      </Box>

      <Box bgColor="bgDark">
        <Box maxWidth="container.xl" mx="auto" px={3} py={3}>
          <Flex color="white" mt={10}>
            <Flex flex={1 / 2}>
              <Box flex={1 / 4}>
                <Text fontSize={12} fontWeight="bold" color="gray.300" textTransform="uppercase">
                  Github Stars
                </Text>
                <Text lineHeight="1" fontWeight="black" fontSize={40}>
                  8.2K
                </Text>
              </Box>
              <Box flex={1 / 4} mx={3} px={3}>
                <Text fontSize={12} fontWeight="bold" color="gray.300" textTransform="uppercase">
                  Last Commit
                </Text>
                <Text lineHeight="1" fontWeight="black" fontSize={40}>
                  2h ago
                </Text>
              </Box>
              <Box flex={1 / 4} mx={3} px={3}>
                <Text fontSize={12} fontWeight="bold" color="gray.300" textTransform="uppercase">
                  Discord Members
                </Text>
                <Text lineHeight="1" fontWeight="black" fontSize={40}>
                  324
                </Text>
              </Box>
            </Flex>

            <Box flex={1 / 2}>
              <Text>
                We are dedicated to maintaining a high quality library and implementing new features
                on a regular basis. You can help us by subscribing to one of our Pro plans.
              </Text>
              <Button variant="primary">React Flow Pro</Button>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* <Flex px={3} py={5} bg="primary" color="white">
        Get the most out of React Flow with our new Pro Subscription
      </Flex> */}

      <ExampleFlow
        title="Feature-rich"
        text="React Flow comes with seamless zooming & panning, customizable node and edge types, single and multi-selection, several event handlers and more."
        Flow={ExampleFlowA}
        color="purple"
      />

      <ExampleFlow
        title="Nested Graphs"
        text="React Flow has built-in support for rendering sub graphs and nested nodes."
        Flow={ExampleFlowB}
        rtl
        color="yellow"
        dark
      />

      <ExampleFlow
        title="Additional Components"
        text="React Flow includes a MiniMap, Controls, Background and a FlowProvider you can use to access internal state outside the ReactFlow component."
        Flow={ExampleFlowC}
        color="red"
      />

      <Box bgColor="bgDark">
        <Box maxWidth="container.md" mx="auto" px={3} py={100}>
          <Heading
            mb={5}
            fontFamily="body"
            fontWeight="black"
            textAlign="center"
            size="2xl"
            color="white"
          >
            Getting Started
          </Heading>
          <Heading
            fontFamily="body"
            fontWeight="bold"
            size="md"
            mx="auto"
            textAlign="center"
            color="gray.300"
          >
            React Flow enables you to build node-based applications. From simple static diagrams to
            complex interactive editors. To get started, you can install it via npm.
          </Heading>
          <Box mt={10}>
            <CodeBlock language="bash">npm install react-flow-renderer</CodeBlock>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
