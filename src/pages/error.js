import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { useLocation, useHistory } from '@docusaurus/router';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const redirects = {
  '#100': '#warning-seems-like-you-have-not-used-zustand-provider-as-an-ancestor',
  '#200':
    '#it-looks-like-you-have-created-a-new-nodetypes-or-edgetypes-object-if-this-wasnt-on-purpose-please-define-the-nodetypesedgetypes-outside-of-the-component-or-memoize-them',
  '#300': '#node-type-not-found-using-fallback-type-default',
  '#400': '#the-react-flow-parent-container-needs-a-width-and-a-height-to-render-the-graph',
  '#500': '#only-child-nodes-can-use-a-parent-extent',
  '#600': '#cant-create-edge-an-edge-needs-a-source-and-a-target',
  '#700': '#the-old-edge-with-idsome-id-does-not-exist',
  '#800': '#couldnt-create-edge-for-sourcetarget-handle-id-some-id-edge-id-some-id',
  '#900': '#marker-type-doesnt-exist',
};

function getLinkFromHash(hash) {
  if (redirects.hasOwnProperty(hash)) {
    return `/docs/guides/troubleshooting/${redirects[hash]}`;
  }
  return null;
}

export default function ErrorRedirecter() {
  const { hash } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const link = getLinkFromHash(hash);

    if (link) {
      history.replace(link);
    }
  }, []);

  return (
    <Layout title="Error Redirecter">
      <Box maxWidth="container.sm" mx="auto" px={3} py={8}>
        <Heading fontWeight="900">Error Redirecter</Heading>
        <Text>
          This page is used to map internal error messages and warnings to the particular
          documentation site.
        </Text>
        <Text>List of error codes with links:</Text>
        {Object.keys(redirects).map((key) => (
          <Link key={key} mr={2} fontWeight="bold" href={getLinkFromHash(key)}>
            {key}
          </Link>
        ))}
      </Box>
    </Layout>
  );
}
