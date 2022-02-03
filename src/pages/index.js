import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Box, Heading, Flex } from '@chakra-ui/react';

import HeroFlow from '../components/HeroFlow';
import ExampleFlow from '../components/ExampleFlow';

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

      <Flex px={3} py={5} bg="primary" color="white">
        Get the most out of React Flow with our new Pro Subscription
      </Flex>

      <Flex alignItems="center" maxWidth="container.xl" mx="auto" flexWrap="wrap" px={3} py={130}>
        <Box p={2} flex="1">
          <Heading fontFamily="body" fontWeight="black" size="xl">
            Feature-rich
          </Heading>
          <Heading fontFamily="body" size="md" mx="auto" color="gray.300" fontWeight="bold">
            React Flow comes with seamless zooming & panning, different edge and node types, single
            and multi-selection, controls, several event handlers and more.
          </Heading>
        </Box>
        <Box flex="1">
          <ExampleFlow />
        </Box>
      </Flex>

      <Flex alignItems="center" maxWidth="container.xl" mx="auto" flexWrap="wrap" px={3} py={130}>
        <Box flex="1">
          <ExampleFlow />
        </Box>
        <Box flex="1">
          <Heading fontWeight="black" size="2xl">
            Example Flow 2
          </Heading>
          <Heading size="ml" mx="auto" size="ml" color="gray.300" fontWeight="normal">
            React Flow enables you to build node-based applications. From simple static diagrams to
            complex interactive editors.
          </Heading>
        </Box>
      </Flex>

      <Flex alignItems="center" maxWidth="container.xl" mx="auto" flexWrap="wrap" px={3} py={130}>
        <Box flex="1">
          <Heading fontWeight="black" size="2xl">
            Example Flow 3
          </Heading>
          <Heading size="ml" mx="auto" size="ml" color="gray.300" fontWeight="normal">
            React Flow enables you to build node-based applications. From simple static diagrams to
            complex interactive editors.
          </Heading>
        </Box>
        <Box flex="1">
          <ExampleFlow />
        </Box>
      </Flex>
    </Layout>
  );
}
