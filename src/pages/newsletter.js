import React from 'react';
import Layout from '@theme/Layout';
import { Box, Heading, Text, Button, Input, Link } from '@chakra-ui/react';

export default function NewsletterPage() {
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
              Get the latest from React Flow
            </Heading>
            <Text color="gray.300" mt={10} fontSize="lg" lineHeight={1.5}>
              Learn something about 1. new features 2. case studies 3. something else. 4 times a
              year.
            </Text>
            <Input placeholder="Email" type="email" color="white"></Input>
            <Button>Sign Up</Button>
          </Box>
          <Link color="gray.300" mt={10} fontSize="lg" lineHeight={1.5}>
            See our most recent newsletter
          </Link>
        </Box>
      </Layout>
    </Box>
  );
}
