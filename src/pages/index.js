import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Box, Heading } from '@chakra-ui/react';

import HeroFlow from '../components/HeroFlow';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <Box height="80vh">
        <HeroFlow />
      </Box>
      <Box px={3} py={130} bgColor="bgDark">
        <Heading fontWeight="black" textAlign="center" size="2xl" color="white">
          Getting Started
        </Heading>
        <Heading size="ml" maxWidth="container.sm" mx="auto" fontWeight="normal" textAlign="center" color="gray.300">
          React Flow enables you to build node-based applications. From simple static diagrams to complex interactive
          editors.
        </Heading>
      </Box>
      <Box px={3} py={130}>
        <Heading fontWeight="black" textAlign="center" size="2xl">
          Getting Started
        </Heading>
        <Heading
          size="ml"
          maxWidth="container.sm"
          mx="auto"
          size="ml"
          color="gray.300"
          textAlign="center"
          fontWeight="normal"
        >
          React Flow enables you to build node-based applications. From simple static diagrams to complex interactive
          editors.
        </Heading>
      </Box>
    </Layout>
  );
}
