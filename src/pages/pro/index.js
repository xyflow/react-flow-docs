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
            description="Free usage of React Flow for non-commercial projects and testing purposes."
            color="gray.700"
            features={['Use React Flow in your non-commercial project']}
            pricing="0$"
            buttonText="Sponsor Us"
            buttonLink="https://github.com/sponsors/wbkd"
            flex={1}
          />
          <ProCard
            title="Startup"
            description="This plan is for 1-2 developers who are working with React Flow."
            bgColor="red.500"
            color="white"
            features={[
              'Get access to React Flow Pro for up to 2 developers',
              'Use React Flow in your company projects',
              'Remove the attribution from the React Flow renderer',
              'Onboarding call with one of the creators of React Flow',
              'Up to 2 invitations to private Datablocks repository',
              'Up to 2 invitations to #insiders Discord channel',
              'You are ensuring the development and maintenance of React Flow',
            ]}
            pricing="129$"
            unit="month"
            buttonText="Subscribe"
            buttonLink="https://react-flow-platform.netlify.app/subscribe/startup"
            flex={1}
          />
          <ProCard
            title="Enterprise"
            description="For teams that are building commercial products with React Flow"
            bgColor="purple.400"
            color="white"
            features={[
              'Up to 5 developers',
              'Use React Flow in your commercial project',
              'Remove the attribution from the React Flow renderer',
              'Onboarding call with one of the creators of React Flow',
              '5 Invitations for your developers to a private Discord channel with the creators of React Flow',
              '5 Invitations for your developers to the private Datablocks repository',
              'You are ensuring the development and maintenance of React Flow',
              'Your company name on the React Flow homepage (80k views per month)',
            ]}
            pricing="449$"
            unit="month"
            buttonText="Subscribe"
            buttonLink="https://react-flow-platform.netlify.app/subscribe/enterprise"
            flex={1}
          />
          <ProCard
            title="Custom"
            description="For teams that are building commercial products with React Flow"
            bgColor="purple.400"
            color="white"
            features={[
              'Up to 5 developers',
              'Use React Flow in your commercial project',
              'Remove the attribution from the React Flow renderer',
              'Onboarding call with one of the creators of React Flow',
              '5 Invitations for your developers to a private Discord channel with the creators of React Flow',
              '5 Invitations for your developers to the private Datablocks repository',
              'You are ensuring the development and maintenance of React Flow',
              'Your company name on the React Flow homepage (80k views per month)',
            ]}
            buttonText="Talk to us"
            buttonLink="mailto:info@webkid.io"
            flex={1}
          />
        </Flex>

        <Box maxWidth="container.md" mt={30} mb={20} mx="auto">
          <Heading size="md" color="gray.400" fontWeight="normal" mt={5} textAlign="center">
            For any questions about our pro subscriptions and inquiries for custom support or
            development services, please contact us at info[at]webkid.io.
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
