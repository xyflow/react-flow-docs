import React from 'react';
import Layout from '@theme/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';
import Showcase from '../components/Showcase';

export default function ShowcasePage() {
  return (
    <Box bg="purple.800">
      <Layout title="Showcase" description="Explore a selection of projects that use React Flow">
        <Box px={8} py={20}>
          <Box
            mb={20}
            color="white"
            textAlign="center"
            maxWidth="container.lg"
            mx="auto"
            px={3}
            py={8}
          >
            <Heading fontWeight="900" size="4xl">
              Showcase
            </Heading>
            <Text color="gray.300" mt={10} fontSize="lg" lineHeight={1.5}>
              React Flow is used by thousands of people, from solo open-source developers to
              companies like Stripe and Typeform. We’ve seen the library used for data processing
              tools, chatbot builders, machine learning, musical synthesizers, and more. Explore a
              selection of our favorite projects that use React Flow here.
            </Text>
          </Box>
          <Box>
            <Showcase />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
}
