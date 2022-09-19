import React from 'react';
import Heading from '@theme/Heading';
import GHSLugger from 'github-slugger';
import { Box, Flex } from '@chakra-ui/react';

const slugger = new GHSLugger();

function PropItem({ name, type, description, default: defaultValue }) {
  const id = slugger.slug(name);

  return (
    <>
      <Heading as="h4" id={id}>
        <code>{name}</code>
      </Heading>
      <Box mt={-2} fontSize="sm">
        {description && (
          <Flex>
            <Box fontWeight={600} w={100}>
              Description:
            </Box>
            <Box>{description}</Box>
          </Flex>
        )}
        {type && (
          <Flex>
            <Box fontWeight={600} w={100}>
              Type:
            </Box>
            <Box>
              <code>{type}</code>
            </Box>
          </Flex>
        )}
        {defaultValue && (
          <Flex>
            <Box fontWeight={600} w={100}>
              Default:
            </Box>
            <Box>
              <code>{defaultValue}</code>
            </Box>
          </Flex>
        )}
      </Box>
    </>
  );
}

export default PropItem;
