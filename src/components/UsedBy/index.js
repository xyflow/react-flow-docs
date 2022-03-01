import React from 'react';
import { SimpleGrid, Box, Tooltip } from '@chakra-ui/react';

import DoubleLoopLogo from '../../../static/img/used-by/doubleloop.svg';
import LinkedInLogo from '../../../static/img/used-by/linkedin.svg';
import BitDevLogo from '../../../static/img/used-by/bitdev.svg';
import BasisLogo from '../../../static/img/used-by/basis.svg';

export default function UsedBy() {
  return (
    <SimpleGrid columns={[2, 4]} filter="contrast(0) brightness(1.4) saturate(0)">
      <Tooltip label="Doubleloop uses React Flow for their editor.">
        <Box height="30px">
          <DoubleLoopLogo height="100%" />
        </Box>
      </Tooltip>
      <Tooltip label="LinkedIn uses React Flow for an internal tool.">
        <Box height="30px">
          <LinkedInLogo height="100%" />
        </Box>
      </Tooltip>
      <Tooltip label="bit.dev uses React Flow to visualize component dependencies.">
        <Box height="30px">
          <BitDevLogo height="100%" />
        </Box>
      </Tooltip>
      <Tooltip label="getbasis.com uses React Flow for their interactive editor.">
        <Box height="30px">
          <BasisLogo height="100%" />
        </Box>
      </Tooltip>
    </SimpleGrid>
  );
}
