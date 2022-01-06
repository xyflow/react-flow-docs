import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Sandpack } from '@codesandbox/sandpack-react';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      {/* <HeroFlow /> */}
      Wire Your Ideas With React Flow
      <Sandpack template="react" />
    </Layout>
  );
}
