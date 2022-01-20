import React from 'react';
import { List, ListItem, ListIcon, Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function ProCard({
  title,
  description,
  bgColor,
  color,
  features = [],
  buttonText = '',
  flex = 1,
  transform,
  pricing,
}) {
  const borderColor = bgColor || 'gray.500';

  return (
    <Flex
      borderWidth="1px"
      borderStyle="solid"
      borderColor={borderColor}
      flex={flex}
      mx={3}
      borderRadius="base"
      overflow="hidden"
      flexDirection="column"
      transform={transform}
    >
      <Box color={color} borderBottom="1px solid transparent" bgColor={bgColor} borderColor={borderColor} p={4}>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Box>
      <Box p={4}>
        <List p={0} m={0} spacing={2}>
          {features.map((feature) => (
            <ListItem display="flex" key={feature}>
              <ListIcon as={CheckCircleIcon} mt={1} color={borderColor} />
              <span dangerouslySetInnerHTML={{ __html: feature }} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box p={4} mt="auto">
        {pricing && (
          <Text textAlign="center" fontWeight="bold">
            {pricing}
          </Text>
        )}
        <Button width="100%" variant="solid" colorScheme={borderColor.split('.')[0]}>
          {buttonText}
        </Button>
      </Box>
    </Flex>
  );
}
