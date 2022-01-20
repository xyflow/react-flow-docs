import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Flex, Box, Heading } from '@chakra-ui/react';
import ProCard from '../../components/ProCard';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <Box maxWidth="container.lg" mx="auto" p={3}>
        <Box maxWidth="container.md" mt={50} mb={20} mx="auto">
          <Heading fontWeight="black" textAlign="center" size="4xl">
            Unlimited Possibilities With React Flow Pro
          </Heading>
          <Heading color="gray.400" fontWeight="normal" mt={5} textAlign="center" size="lg">
            Choose the right plan for your needs to get the most out of React Flow.
          </Heading>
        </Box>

        <Flex my={5}>
          <ProCard
            title="Free"
            description="React Flow is free and licensed under MIT License"
            color="gray.700"
            features={['Use React Flow on unlimited projects', 'Join the public <a href="">Discord Server</a>']}
            buttonText="Sponsor"
          />
          <ProCard
            title="Pro"
            description="Commercial version for small and medium sized companies"
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
            buttonText="Sign Up"
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
          />
        </Flex>
      </Box>
    </Layout>
  );
}
