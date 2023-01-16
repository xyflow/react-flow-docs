import React, { useState } from 'react';
import { Alert, AlertIcon, Box, Button, Flex, chakra, Text, Spinner, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const IFrame = chakra('iframe', {
  baseStyle: {
    width: '100%',
    height: 860,
    borderRadius: 'sm',
    overflow: 'hidden',
    margin: 0,
  },
});

export default function ProExampleViewer({ slug }) {
  const [isLoading, setLoading] = useState(true);

  if (!slug) {
    return null;
  }

  const exampleSrc = `https://pro.reactflow.dev/examples/${slug}`;
  const iframeSrc = `${exampleSrc}/full`;

  const onLoad = () => {
    setLoading(false);
  };

  return (
    <Box>
      <Box
        borderRadius="lg"
        p={5}
        bg="#ffe5f1"
        border="1px solid"
        borderColor="pink.500"
        minHeight={860}
        position="relative"
      >
        <Flex mb={4} alignItems="center" justifyContent="space-between">
          <Text mb={0} fontWeight="bold" color="pink.500">
            This is a Pro example. If you are subscribed to React Flow Pro you can access the
            annotated source code.
          </Text>
          <a textDecoration="none" target="_blank" href={exampleSrc}>
            <Button
              leftIcon={<ExternalLinkIcon />}
              borderRadius="md"
              px={2}
              textDecoration="none"
              size="md"
              ml={2}
              flexShrink="0"
              colorScheme="pink"
            >
              View Source Code
            </Button>
          </a>
        </Flex>
        <Box position="relative">
          {isLoading && (
            <Flex
              background="rgba(255, 255, 255, 0.95)"
              zIndex={1000}
              width="100%"
              height="100%"
              position="absolute"
              alignItems="center"
              justifyContent="center"
            >
              <Spinner size="xl" color="pink.500" />
            </Flex>
          )}
          <IFrame onLoad={onLoad} src={iframeSrc} />
        </Box>
      </Box>
    </Box>
  );
}
