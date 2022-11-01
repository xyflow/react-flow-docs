import React from 'react';
import Layout from '@theme/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';

import NewsletterSignup from '../components/NewsletterSignup';

export default function NewsletterThankYou() {
  return (
    <Box bg="purple.800">
      <Layout title="Newsletter - updates from the React Flow team" description="">
        <Box px={8} py={20}>
          <Box
            mb={20}
            color="white"
            textAlign="center"
            maxWidth="container.md"
            mx="auto"
            px={3}
            py={8}
          >
            <Heading fontWeight="900" size="4xl">
              React Flow Newsletter
            </Heading>
            <Text mb={16} color="gray.300" mt={8} fontSize="lg" lineHeight={1.5}>
              Get the latest updates, articles and resources directly from the React Flow team
            </Text>
            <NewsletterSignup size="lg" maxWidth={400} mx="auto" />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
}
