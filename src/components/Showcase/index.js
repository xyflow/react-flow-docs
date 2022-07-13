import React from 'react';
import { Box, Heading, Flex, Text, Button, SimpleGrid, HStack, Tag } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Image from '@theme/IdealImage';

import showcases from '../../../static/data/showcases.json';

function ShowcaseLink({ href, children, ...rest }) {
  return (
    <Button
      color="white"
      _hover={{ color: 'primary' }}
      as="a"
      href={href}
      target="_blank"
      variant="link"
      mt="auto"
      justifyContent="flex-start"
      {...rest}
    >
      {children} <ArrowForwardIcon fontSize={18} ml={1} />
    </Button>
  );
}

function Showcase({ numberOfProjects }) {
  const projects = numberOfProjects ? showcases.slice(0, numberOfProjects) : showcases;

  return (
    <Box>
      <SimpleGrid columns={[2, 2, 3]} spacing={14} maxWidth="container.xl" mx="auto">
        {projects.map((project) => (
          <Flex direction="column" key={project.id}>
            <Image
              style={{
                height: 280,
                position: 'relative',
                display: 'flex',
                overflow: 'hidden',
                borderRadius: 5,
              }}
              img={require(`../../../static/img/showcase/${project.image}`)}
              theme={{
                img: {
                  objectFit: 'cover',
                  objectPosition: 'center',
                  width: '100%',
                  height: '100%',
                },
                placeholder: {
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                },
              }}
            />
            <Heading mb={3} mt={3} fontFamily="body" fontWeight="black" size="lg" color="white">
              {project.title}
            </Heading>
            <Text fontFamily="body" fontSize="lg" color="gray.300" lineHeight={1.2}>
              {project.description}
            </Text>
            <HStack mb={2}>
              {project.tags.map((t) => (
                <Tag size="md" colorScheme="gray">
                  {t.name}
                </Tag>
              ))}
            </HStack>
            <Flex>
              <ShowcaseLink href={project.url}>project</ShowcaseLink>
              {project.demoUrl && (
                <ShowcaseLink ml={4} href={project.demoUrl}>
                  demo
                </ShowcaseLink>
              )}
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Showcase;
