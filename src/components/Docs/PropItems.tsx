import React, { ReactNode, memo } from 'react';
import Heading from '@theme/Heading';
import GHSLugger from 'github-slugger';
import PropItem, { PropItemProps } from './PropItem';

const slugger = new GHSLugger();

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type PropItemsProps = {
  title?: ReactNode;
  props: PropItemProps[];
  titleAs?: HeadingType;
};

function PropItems({ title, props, titleAs = 'h2' }: PropItemsProps) {
  const id = slugger.slug(title);

  return (
    <>
      {title && (
        <Heading as={titleAs} id={id}>
          {title}
        </Heading>
      )}

      {props.map((prop) => (
        <PropItem key={prop.name} {...prop} />
      ))}
    </>
  );
}

export default memo(PropItems);
