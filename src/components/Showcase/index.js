import React from 'react';
import { Box, Heading, Flex, Text, Button, SimpleGrid, useBoolean } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import showcases from '../../../static/data/showcases.json';

function Showcase({ numberOfProjects }) {
  const projects = numberOfProjects ? showcases.slice(0, numberOfProjects) : showcases;

  return (
    <Box>
      <SimpleGrid columns={[2, 2, 3]} spacing={6} maxWidth="container.xl" mx="auto">
        {projects.map((project) => (
          <Flex direction="column" key={project.id}>
            <Box
              backgroundImage={`url(/img/showcase/${project.image})`}
              h={220}
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="md"
            />
            <Heading mb={5} mt={6} fontFamily="body" fontWeight="black" size="lg" color="white">
              {project.title}
            </Heading>
            <Text fontFamily="body" fontSize="xl" mx="auto" color="gray.300">
              {project.description}
            </Text>
            <Button
              color="white"
              _hover={{ color: 'primary' }}
              as="a"
              href={project.url}
              target="_blank"
              variant="link"
              mt="auto"
              justifyContent="flex-start"
            >
              visit project <ArrowForwardIcon fontSize={19} ml={2} />
            </Button>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Showcase;
