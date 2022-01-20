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
          <ProCard title="Free" description="For evaluation and private projects" color="gray.700" />
          <ProCard
            title="Pro"
            description="Commercial version for small and medium sized companies"
            bgColor="red.500"
            color="white"
          />
          <ProCard
            title="Custom"
            description="Custom pricing for large companies and special use cases"
            bgColor="purple.400"
            color="white"
          />
        </Flex>
      </Box>
    </Layout>
  );
}
