import React, { useState } from 'react';
import { Alert, AlertIcon, Box, Button, Flex, chakra, Spinner } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const IFrame = chakra('iframe', {
  baseStyle: {
    width: '100%',
    height: 860,
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
      <Alert status="info" mb={6} bg="#ff0072" color="white">
        <AlertIcon sx={{ path: { fill: 'white' } }} />
        This is a pro example. If you are subscribed you can access the annotated source code on the{' '}
        <Button
          leftIcon={<ExternalLinkIcon />}
          as="a"
          href={exampleSrc}
          borderRadius="md"
          px={2}
          size="xs"
          ml={2}
        >
          Pro Platform
        </Button>
      </Alert>

      <Box minHeight={860} position="relative">
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
  );
}
