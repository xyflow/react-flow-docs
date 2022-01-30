import React from 'react';
import Layout from '@theme/Layout';
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
      <Box height="80vh" position="relative">
        <HeroFlow />
      </Box>

      <Box bgColor="bgDark">
        <Box maxWidth="container.lg" mx="auto" px={3} py={130}>
          <Heading fontWeight="black" textAlign="center" size="2xl" color="white">
            Getting Started
          </Heading>
          <Heading size="ml" mx="auto" fontWeight="normal" textAlign="center" color="gray.300">
            React Flow enables you to build node-based applications. From simple static diagrams to
            complex interactive editors.
          </Heading>
        </Box>
      </Box>

      <Flex px={3} py={5} bg="primary" color="white">
        Get the most out of React Flow with our new Pro Subscription
      </Flex>

      <Flex alignItems="center" maxWidth="container.xl" mx="auto" flexWrap="wrap" px={3} py={130}>
        <Box flex="1">
          <Heading fontWeight="black" size="2xl">
            Example Flow 1
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
