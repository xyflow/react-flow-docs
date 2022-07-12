import React from 'react';
import Layout from '@theme/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';
import Showcase from '../components/Showcase';

export default function ShowcasePage() {
  return (
    <Box bg="purple.800">
      <Layout title="React Flow Showcase">
        <Box py={32}>
          <Box
            mb={20}
            color="white"
            textAlign="center"
            maxWidth="container.lg"
            mx="auto"
            px={3}
            py={8}
          >
            <Heading fontWeight="900" size="2xl">
              Showcase
            </Heading>
            <Heading size="md" fontWeight="300">
              React Flow is used by a wide variety of organizations from Fortune 500 to small hobby
              projects. Explore what can be done with React Flow. Explore all the ways that React
              Flow is created. Get Inspired.
            </Heading>
          </Box>
          <Box>
            <Showcase />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
}
