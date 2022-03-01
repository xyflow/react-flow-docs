import React from 'react';
import { Box, Heading, Flex, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Showcase() {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={10} maxWidth="container.xl" mx="auto">
      <Box>
        <Box
          backgroundImage="url(/img/datablocks.png)"
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
        <SimpleGrid columns={[1, 2, 2]} spacing={5}>
          <Box>
            <Box
              backgroundImage="url(/img/bitdev.png)"
              h={180}
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="md"
            />
            <Button
              color="white"
              mt={4}
              as="a"
              href="https://bit.dev"
              target="_blank"
              variant="link"
              _hover={{ color: 'primary' }}
            >
              bit.dev <ArrowForwardIcon fontSize={19} ml={2} />
            </Button>
          </Box>
          <Box>
            <Box
              backgroundImage="url(/img/getbasis.png)"
              h={180}
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="md"
            />
            <Button
              color="white"
              mt={4}
              as="a"
              href="https://getbasis.com"
              target="_blank"
              variant="link"
              _hover={{ color: 'primary' }}
            >
              getbasis.com <ArrowForwardIcon fontSize={19} ml={2} />
            </Button>
          </Box>
          <Box>
            <Box
              backgroundImage="url(/img/circles360.png)"
              h={180}
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="md"
            />
            <Button
              color="white"
              mt={4}
              as="a"
              href="https://circles360.github.io"
              target="_blank"
              variant="link"
              _hover={{ color: 'primary' }}
            >
              circles360.github.io <ArrowForwardIcon fontSize={19} ml={2} />
            </Button>
          </Box>
          <Box>
            <Flex
              border="1px dashed"
              borderColor="gray.700"
              h={180}
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="md"
              color="gray.300"
              fontWeight="bold"
              alignItems="center"
              justifyContent="center"
            >
              your project here
            </Flex>
            <Button
              color="white"
              _hover={{ color: 'primary' }}
              mt={4}
              as="a"
              href="https://datablocks.pro"
              target="_blank"
              variant="link"
            >
              contact us <ArrowForwardIcon fontSize={19} ml={2} />
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
}

export default Showcase;
