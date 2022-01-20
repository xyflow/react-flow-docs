import React from 'react';
import { UnorderedList, ListItem, Box, Heading, Text } from '@chakra-ui/react';

export default function ProCard({ title, description, bgColor, color }) {
  const borderColor = bgColor || 'gray.500';

  return (
    <Box
      borderWidth="1px"
      borderStyle="solid"
      borderColor={borderColor}
      flex="1"
      mx={3}
      borderRadius="base"
      overflow="hidden"
    >
      <Box color={color} borderBottom="1px solid transparent" bgColor={bgColor} borderColor={borderColor} p={3}>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Box>
      <Box p={3}>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}
