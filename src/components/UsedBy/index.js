import React from 'react';
import { SimpleGrid, Box, Tooltip } from '@chakra-ui/react';

import DoubleLoopLogo from '../../../static/img/used-by/doubleloop.svg';
import LinkedInLogo from '../../../static/img/used-by/linkedin.svg';
import BitDevLogo from '../../../static/img/used-by/bitdev.svg';
import BasisLogo from '../../../static/img/used-by/basis.svg';
import TypeformLogo from '../../../static/img/used-by/typeform.svg';

const CompanyLogo = ({ Logo, ...props }) => (
  <Box height="30px" {...props}>
    <Logo height="100%" />
  </Box>
);

export default function UsedBy() {
  return (
    <SimpleGrid columns={[2, 5]} filter="contrast(0) brightness(1.4) saturate(0)">
      <CompanyLogo Logo={LinkedInLogo} />
      <CompanyLogo Logo={DoubleLoopLogo} />
      <CompanyLogo Logo={TypeformLogo} />
      <CompanyLogo Logo={BitDevLogo} />
      <CompanyLogo Logo={BasisLogo} />
    </SimpleGrid>
  );
}
