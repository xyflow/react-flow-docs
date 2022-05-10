import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  Box,
  Heading,
  Center,
  Text,
  Button,
  SimpleGrid,
  chakra,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FiMail } from 'react-icons/fi';

import HeroFlow from '../components/HeroFlow';
import ExampleFlow from '../components/ExampleFlow';
import ExampleFlowA from '../components/ExampleFlow/A';
import ExampleFlowB from '../components/ExampleFlow/B';
import ExampleFlowC from '../components/ExampleFlow/C';

import Stats from '../components/Stats';
import Showcase from '../components/Showcase';
import UsedBy from '../components/UsedBy';

export default function Home() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home" description={siteConfig.customFields.description}>
      <Box height={['80vh', null, null, 580]} position="relative">
        <HeroFlow />
      </Box>

      <Box color="white" bgColor="purple.800">
        <Box maxWidth="container.xl" mx="auto" px={3} py={8}>
          <SimpleGrid columns={[1, null, 2]}>
            <Stats />
            <Box>
              <Text fontSize="lg">
                React Flow is a MIT-licensed open source library. You can help us to ensure the
                further development and maintenance by subscribing to React Flow Pro.
              </Text>
              <Button
                rightIcon={<ArrowForwardIcon fontSize={19} />}
                variant="link"
                as="a"
                href="https://pro.reactflow.dev/pricing"
                _hover={{ color: 'white' }}
              >
                React Flow Pro
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box py={8}>
        <ExampleFlow
          title="Feature-rich"
          text="React Flow comes with seamless zooming & panning, customizable node and edge types, single and multi-selection, several event handlers and more."
          Flow={ExampleFlowA}
        />

        <ExampleFlow
          title="Nested Graphs"
          text="React Flow has built-in support for rendering sub graphs and nested nodes."
          Flow={ExampleFlowB}
          rtl={isLargeScreen}
          dark
        />

        <ExampleFlow
          title="Additional Components"
          text="React Flow includes a MiniMap, Controls, Background and a FlowProvider you can use to access internal state outside the ReactFlow component."
          Flow={ExampleFlowC}
        />
      </Box>

      <Box bgColor="purple.800" px={3} py={28}>
        <Box textAlign="center" m="0 auto" maxWidth="container.md">
          <Heading mb={5} fontFamily="body" fontWeight="black" size="2xl" color="white">
            Showcase
          </Heading>
          <Text mb={20} fontFamily="body" fontSize="xl" mx="auto" color="gray.300">
            React Flow can be used for a wide range of applications: Music Synthesizers, Machine
            Learning Modeling, Conversational UIs.
          </Text>
        </Box>
        <Showcase />
      </Box>

      <Box px={3} pt={20} pb={20}>
        <Box m="0 auto" maxWidth="container.xl">
          <Heading textAlign="center" textTransform="uppercase" fontSize={16} mb={6}>
            Used By
          </Heading>
          <UsedBy />
        </Box>
      </Box>

      <Box bgColor="purple.800" px={3} py={32}>
        <Box textAlign="center" m="0 auto" maxWidth="container.md">
          <Heading mb={5} fontFamily="body" fontWeight="black" size="2xl" color="white">
            Get in Contact
          </Heading>
          <Text fontFamily="body" fontSize="xl" mx="auto" color="gray.300" mb={12}>
            If you have any questions about React Flow or our monthly subscription plans,
            <chakra.br display={['none', 'none', 'block']} />
            please get in touch.
          </Text>
          <Center>
            <Button
              leftIcon={<FiMail />}
              variant="primary"
              as="a"
              colorScheme="pink"
              href="https://pro.reactflow.dev/contact"
              _hover={{ color: 'white' }}
            >
              Contact Us
            </Button>
          </Center>
        </Box>
      </Box>
    </Layout>
  );
}
