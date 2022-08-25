import React from 'react';
import { Box, Heading, Flex, Text, Button, SimpleGrid, Tag } from '@chakra-ui/react';
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

function getProjects(numberOfProjects, featuredOnly) {
  let projects = showcases;

  if (featuredOnly) {
    projects = projects.filter((project) => project.featured);
  }

  if (typeof numberOfProjects === 'number') {
    projects = projects.slice(0, numberOfProjects);
  }

  return projects;
}

function Showcase({
  numberOfProjects,
  featuredOnly = false,
  hideExternalLinks = false,
  hideTags = false,
}) {
  const projects = getProjects(numberOfProjects, featuredOnly);

  return (
    <Box>
      <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={14} maxWidth="container.xl" mx="auto">
        {projects.map((project) => (
          <Flex direction="column" key={project.id}>
            <Box position="relative">
              <Image
                style={{
                  height: 280,
                  position: 'relative',
                  display: 'flex',
                  overflow: 'hidden',
                  borderRadius: 5,
                }}
                min={800}
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
              {!hideTags && (
                <Flex wrap="wrap" position="absolute" top={2} left={2}>
                  {project.tags.map((t) => (
                    <Tag
                      mr={2}
                      mb={1}
                      size="md"
                      bg="white"
                      color="white"
                      backgroundColor="gray.700"
                      key={t.name}
                    >
                      {t.name}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Box>
            <Heading mb={3} mt={3} fontFamily="body" fontWeight="black" size="lg" color="white">
              {project.title}
            </Heading>
            <Text fontFamily="body" fontSize="lg" color="gray.300" lineHeight={1.2}>
              {project.description}
            </Text>
            {!hideExternalLinks && (
              <Flex mt="auto">
                <ShowcaseLink href={project.url}>website</ShowcaseLink>
                {project.demoUrl && (
                  <ShowcaseLink ml={4} href={project.demoUrl}>
                    demo
                  </ShowcaseLink>
                )}
              </Flex>
            )}
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Showcase;
