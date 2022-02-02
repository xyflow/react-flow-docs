import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Flex, Box, Heading } from '@chakra-ui/react';

import ProCard from '../../components/ProCard';
import FAQ from '../../components/FAQ';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="React Flow Pro" description="Description will go into a meta tag in <head />">
      <Box maxWidth="container.xl" mx="auto" p={3}>
        <Box maxWidth="container.md" mt={50} mb={20} mx="auto">
          <Heading fontWeight="black" textAlign="center" size="3xl">
            React Flow Pro
          </Heading>
          <Heading color="gray.400" fontWeight="normal" mt={5} textAlign="center" size="lg">
            With a paid subscription you are ensuring the maintenance and further development of the
            React Flow library
          </Heading>
        </Box>

        <Flex flexWrap="wrap" my={5} flexDirection={['column', null, null, 'row']}>
          <ProCard
            title="Free"
            description="Free usage of React Flow in non-profit projects. If you want to support us, we would appreciate your sponsorship."
            color="gray.700"
            features={['Use React Flow in your non-commercial project']}
            pricing="0$"
            buttonText="Sponsor Us"
            flex={1}
          />
          <ProCard
            title="Professional"
            description="Recommended for Small and Medium-sized companies."
            bgColor="red.500"
            color="white"
            features={[
              'Use React Flow in your company projects',
              'Remove the attribution from the React Flow renderer',
              'Onboarding call with one of the creators of React Flow',
              'Invitation to private Datablocks repository',
              'Invitation to #insiders Discord channel',
              'You are ensuring the development and maintenance of React Flow',
            ]}
            pricing="129$"
            buttonText="Sign Up"
            flex={1}
          />
          <ProCard
            title="Enterprise"
            description="Recommended for heavy users of React Flow"
            bgColor="purple.400"
            color="white"
            features={[
              'Use React Flow in your company projects',
              'Remove the attribution from the React Flow renderer',
              'Use React Flow in your company projects',
              'Remove the attribution from the React Flow renderer',
              'Onboarding call with one of the creators of React Flow',
              'Invitation to private Discord channel with the creators of React Flow',
              'Invitation to private Datablocks repository',
              'You are ensuring the development and maintenance of React Flow',
            ]}
            pricing="449$"
            buttonText="Sign Up"
            flex={1}
          />
        </Flex>

        <Box maxWidth="container.md" mt={30} mb={20} mx="auto">
          <Heading size="md" color="gray.400" fontWeight="normal" mt={5} textAlign="center">
            There is even more. If you need custom development services or want your company be
            listed as sponsor on our website or readme (80k views per month), please contact us for
            custom pricing.
          </Heading>
        </Box>

        <Box maxWidth="container.md" mt={100} mb={20} mx="auto">
          <Heading size="xl" textAlign="center">
            Frequently Asked Questions
          </Heading>
          <Box my={10}>
            <FAQ />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
