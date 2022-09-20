import React, { ReactNode } from 'react';
import Heading from '@theme/Heading';
import GHSLugger from 'github-slugger';
import { Box, Flex } from '@chakra-ui/react';

const slugger = new GHSLugger();

export type PropItemProps = {
  name: string;
  type?: ReactNode;
  description?: ReactNode;
  default?: ReactNode;
};

function PropItem({ name, type, description, default: defaultValue }: PropItemProps) {
  const id = slugger.slug(name);

  return (
    <>
      <Heading as="h4" id={id}>
        <code>{name}</code>
      </Heading>
      <Box mt={-2} fontSize="sm">
        {description && (
          <Flex>
            <Box fontWeight={600} w={100} flexShrink={0}>
              Description:
            </Box>
            <Box>{description}</Box>
          </Flex>
        )}
        {type && (
          <Flex>
            <Box fontWeight={600} w={100} flexShrink={0}>
              Type:
            </Box>
            <Box>
              <code>{type}</code>
            </Box>
          </Flex>
        )}
        {defaultValue && (
          <Flex>
            <Box fontWeight={600} w={100} flexShrink={0}>
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
