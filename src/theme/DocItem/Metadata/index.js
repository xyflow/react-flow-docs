import React from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';

function getPageTitle(metadata) {
  if (!metadata.title) {
    return '';
  }

  let appendix = '';

  if (metadata.source?.includes('/api/')) {
    appendix = ' API';
  } else if (metadata.source?.includes('/guides/')) {
    appendix = ' Guide';
  } else if (metadata.source?.includes('/examples/')) {
    appendix = ' Example';
  } else if (metadata.source?.includes('/getting-started/')) {
    appendix = ' - Getting Started';
  }

  return `${metadata.title}${appendix}`;
}

export default function DocItemMetadata() {
  const { metadata, frontMatter, assets } = useDoc();
  const title = getPageTitle(metadata);

  return (
    <PageMetadata
      title={title}
      description={metadata.description}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image}
    />
  );
}
