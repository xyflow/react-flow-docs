import React from 'react';
import {
  SimpleGrid,
  Box,
  Stat,
  StatLabel as ChakraStatLabel,
  StatNumber as ChakraStatNumber,
} from '@chakra-ui/react';

import stats from '../../../static/data/stats.json';

const StatLabel = (props) => (
  <ChakraStatLabel
    mb={2}
    fontSize={12}
    fontWeight="bold"
    color="gray.300"
    textTransform="uppercase"
    {...props}
  />
);
const StatNumber = (props) => (
  <ChakraStatNumber m={0} fontWeight="black" fontSize={40} textTransform="uppercase" {...props} />
);

export default function Stats(props) {
  return (
    <SimpleGrid columns={3} spacing={1} {...props}>
      <Stat>
        <StatNumber textTransform="none">
          {' '}
          {(stats.stars / 1000).toFixed(1)}
          <Box as="span" fontSize="95%">
            K
          </Box>
        </StatNumber>
        <StatLabel>Github Stars</StatLabel>
      </Stat>
      <Stat>
        <StatNumber>
          {(stats.downloads / 1000).toFixed(0)}
          <Box as="span" fontSize="95%">
            K
          </Box>
        </StatNumber>
        <StatLabel>Weekly Installs</StatLabel>
      </Stat>
      <Stat>
        <StatNumber>MIT</StatNumber>
        <StatLabel>License</StatLabel>
      </Stat>
    </SimpleGrid>
  );
}
