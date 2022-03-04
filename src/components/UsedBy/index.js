import React from 'react';
import { SimpleGrid, Flex, Box } from '@chakra-ui/react';

import DoubleLoopLogo from '../../../static/img/used-by/doubleloop.svg';
import LinkedInLogo from '../../../static/img/used-by/linkedin.svg';
import BitDevLogo from '../../../static/img/used-by/bitdev.svg';
import BasisLogo from '../../../static/img/used-by/basis.svg';
import TypeformLogo from '../../../static/img/used-by/typeform.svg';
import OneSignalLogo from '../../../static/img/used-by/onesignal.svg';

const CompanyLogo = ({ Logo, ...props }) => (
  <Flex
    alignItems="center"
    borderRadius="md"
    justifyContent="center"
    height="60px"
    bg="#f7f7f7"
    {...props}
  >
    <Box height="25px" filter="contrast(0) brightness(1.4) saturate(0)">
      <Logo height="100%" />
    </Box>
  </Flex>
);

export default function UsedBy() {
  return (
    <SimpleGrid textAlign="center" columns={[2, 3, 3, 3, 6]} spacing={4}>
      <CompanyLogo title="linkedin.com" Logo={LinkedInLogo} />
      <CompanyLogo title="onesignal.com" Logo={OneSignalLogo} />
      <CompanyLogo title="typeform.com" Logo={TypeformLogo} />
      <CompanyLogo title="doubleloop.app" Logo={DoubleLoopLogo} />
      <CompanyLogo title="bit.dev" Logo={BitDevLogo} />
      <CompanyLogo title="getbasis.com" Logo={BasisLogo} />
    </SimpleGrid>
  );
}
