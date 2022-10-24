import React from 'react';
import Layout from '@theme/Layout';
import { Button, Box, Heading, Text } from '@chakra-ui/react';
import Link from '@docusaurus/Link';

export default function NewsletterThankYou() {
  return (
    <Box bg="purple.800">
      <Layout title="Newsletter - updates from the React Flow team" description="">
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
              Something went wrong.
            </Heading>
            <Text mb={10} color="gray.300" mt={10} fontSize="lg" lineHeight={1.5}>
              We couldn't subscribe you to our newsletter. Please try again.
            </Text>
            <Link href="/">
              <Button colorScheme="pink">Return to Homepage</Button>
            </Link>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
}
