import React from 'react';
import Heading from '@theme/Heading';
import GHSLugger from 'github-slugger';
import PropItem from './PropItem';

const slugger = new GHSLugger();

function PropItems({ title, props }) {
  const id = slugger.slug(title);

  return (
    <>
      <Heading as="h2" id={id}>
        {title}
      </Heading>

      {props.map((prop) => (
        <PropItem {...prop} />
      ))}
    </>
  );
}

export default PropItems;
