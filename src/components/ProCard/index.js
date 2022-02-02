import React from 'react';
import { List, ListItem, ListIcon, Box, Heading, Text, Flex, Button, Link } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function ProCard({
  title,
  description,
  bgColor,
  color,
  features = [],
  buttonText = '',
  buttonLink,
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
      m={5}
      borderRadius="xl"
      overflow="hidden"
      flexDirection="column"
      transform={transform}
    >
      <Flex
        flexDir="column"
        minHeight={250}
        color="gray.800"
        borderBottom="1px solid transparent"
        borderColor={borderColor}
        p={6}
      >
        <Heading>{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <Flex mt="auto">
          {pricing && (
            <Flex flexShrink="0" mr={5} alignItems="center">
              <Text mb={0} fontSize="2xl" fontWeight="bold" fontWeight="bold">
                {pricing}{' '}
                <Text mb={0} fontSize="md" as="span" color="gray.400">
                  / month
                </Text>
              </Text>
            </Flex>
          )}
          <Button
            maxWidth="250px"
            width="100%"
            variant="primary"
            bgColor={borderColor}
            ml="auto"
            as={Link}
            href={buttonLink}
            target="_blank"
          >
            {buttonText}
          </Button>
        </Flex>
      </Flex>
      <Box p={6}>
        <Text textTransform="uppercase" fontWeight="bold" color="gray.400" fontSize={14}>
          Included Features
        </Text>
        <List p={0} m={0} spacing={2}>
          {features.map((feature) => (
            <ListItem display="flex" key={feature}>
              <ListIcon as={CheckCircleIcon} mt={1} mr={4} fontSize={22} color="#6EDE87" />
              <Text color="gray.600">
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
}
