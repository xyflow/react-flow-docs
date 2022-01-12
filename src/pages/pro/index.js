import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import ProCard from '../../components/ProCard';
import styles from './pro.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <div className={styles.proCardGrid}>
        <ProCard title="Free" />
        <ProCard title="Pro" />
        <ProCard title="Custom" />
      </div>
    </Layout>
  );
}
