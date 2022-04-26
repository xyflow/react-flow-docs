import React, { useState } from 'react';
import { Box, Flex, chakra, Spinner } from '@chakra-ui/react';

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

  const iframeSrc = `https://react-flow-platform-staging.netlify.app/examples/${slug}`;

  const onLoad = () => {
    setTimeout(() => setLoading(false), 700);
  };

  return (
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
  );
}
