import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Flex, Box, Heading } from '@chakra-ui/react';

import ProCard from '../../components/ProCard';
import FAQ from '../../components/FAQ';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Box maxWidth="container.xl" mx="auto" p={3}>
        <Box maxWidth="container.md" mt={50} mb={20} mx="auto">
          <Heading fontWeight="black" textAlign="center" size="3xl">
            Unlimited Possibilities With React Flow Pro
          </Heading>
          <Heading color="gray.400" fontWeight="normal" mt={5} textAlign="center" size="lg">
            With a paid subscription you are ensuring the maintenance and further development of the
            React Flow library
          </Heading>
        </Box>

        <Flex my={5}>
          <ProCard
            title="Free"
            description="React Flow is free and published under MIT License"
            color="gray.700"
            features={[
              'Use React Flow on unlimited projects',
              'Join the public <a href="">Discord Server</a>',
            ]}
            buttonText="Sponsor"
            flex={0.3}
          />
          <ProCard
            title="Pro"
            description="Commercial version for small and medium sized companies."
            bgColor="red.500"
            color="white"
            features={[
              'Use React Flow on unlimited projects',
              'Remove attribution from React Flow pane',
              'Private Discord channel with the creators of React Flow (48hrs answer rate)',
              'Invitation to private repository with 20+ advanced React Flow examples',
              'Invitation to private Datablocks repository ',
              'You are ensuring the further development and maintenance of React Flow',
            ]}
            pricing="500$ per month"
            buttonText="Sign Up"
            flex={0.4}
            transform="scale(1.05)"
          />
          <ProCard
            title="Custom"
            description="Custom pricing for large companies and special use cases"
            bgColor="purple.400"
            color="white"
            features={[
              'All features of the Pro plan',
              'Guaranteed support hours per month from the React Flow team',
              'Your company name in the readme',
              'Your company logo on the React Flow website (20k+ visitors per month)',
            ]}
            buttonText="Contact Us"
            flex={0.3}
          />
        </Flex>
        <Box maxWidth="container.md" mt={100} mb={20} mx="auto">
          <Heading textAlign="center">Frequently Asked Questions</Heading>
          <Box my={10}>
            <FAQ />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
