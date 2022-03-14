import React from 'react';
import { Box, Heading, Flex, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Showcase() {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={10} maxWidth="container.xl" mx="auto">
      <Box>
        <Box
          backgroundImage="url(/img/showcase/datablocks.png)"
          h={350}
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="md"
        />
        <Heading mb={5} mt={6} fontFamily="body" fontWeight="black" size="lg" color="white">
          Datablocks
        </Heading>
        <Text fontFamily="body" fontSize="xl" mx="auto" color="gray.300">
          A node-based editor for exploring, analyzing and transforming data without code. React
          Flow was initially built for datablocks.
        </Text>
        <Button
          color="white"
          _hover={{ color: 'primary' }}
          as="a"
          href="https://datablocks.pro"
          target="_blank"
          variant="link"
        >
          datablocks.pro <ArrowForwardIcon fontSize={19} ml={2} />
        </Button>
      </Box>
      <Box>
        <Flex
          border="1px dashed"
          borderColor="gray.700"
          h={350}
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="md"
          color="gray.300"
          fontWeight="bold"
          alignItems="center"
          justifyContent="center"
        >
          your open source project here
        </Flex>
        <Button
          color="white"
          _hover={{ color: 'primary' }}
          mt={4}
          as="a"
          href="https://pro.reactflow.dev/contact"
          target="_blank"
          variant="link"
        >
          contact us <ArrowForwardIcon fontSize={19} ml={2} />
        </Button>
      </Box>
    </SimpleGrid>
  );
}

export default Showcase;
