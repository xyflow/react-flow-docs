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
              React Flow Newsletter
            </Heading>
            <Text color="gray.300" mt={10} fontSize="lg" lineHeight={1.5}>
              Get the latest from us on major updates, case studies, and new examples. About 4 times
              a year.
            </Text>
            <iframe
              // style={{ overflow: hidden }}
              scrolling="no"
              class="mj-w-res-iframe"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              src="https://app.mailjet.com/widget/iframe/6xV9/Oqj"
              width="100%"
              height="300px"
            ></iframe>
            <Link color="gray.300" mt={10} fontSize="lg" lineHeight={1.5}>
              See our most recent newsletter
            </Link>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
}
