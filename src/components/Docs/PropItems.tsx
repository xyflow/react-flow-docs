import React, { ReactNode, memo } from 'react';
import Heading from '@theme/Heading';
import GHSLugger from 'github-slugger';
import useRouteContext from '@docusaurus/useRouteContext';
import PropItem, { PropItemProps } from './PropItem';

const slugger = new GHSLugger();

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type PropItemsProps = {
  title?: ReactNode;
  props: PropItemProps[];
  titleAs?: HeadingType;
};

function PropItems({ title, props, titleAs = 'h2' }: PropItemsProps) {
  // https://github.com/facebook/docusaurus/issues/3930#issuecomment-1283935716
  const { id: pluginId } = useRouteContext().plugin;

  const slug = slugger.slug(title);
  const currentProps = Array.isArray(props) || !props[pluginId] ? props : props[pluginId];

  return (
    <>
      {title && (
        <Heading as={titleAs} id={slug}>
          {title}
        </Heading>
      )}

      {currentProps.map((prop) => (
        <PropItem key={prop.name} {...prop} />
      ))}
    </>
  );
}

export default memo(PropItems);
