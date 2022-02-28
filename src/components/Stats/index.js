import React from 'react';
import {
  SimpleGrid,
  Stat,
  StatLabel as ChakraStatLabel,
  StatNumber as ChakraStatNumber,
} from '@chakra-ui/react';

import { shortNumberFormat } from '../../utils';
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
        <StatLabel>Github Stars</StatLabel>
        <StatNumber>{shortNumberFormat(stats.stars)}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>NPM Downloads</StatLabel>
        <StatNumber>{shortNumberFormat(stats.downloads)}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>License</StatLabel>
        <StatNumber>MIT</StatNumber>
      </Stat>
    </SimpleGrid>
  );
}
