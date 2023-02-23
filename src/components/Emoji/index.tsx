import React from 'react';

export type EmojiProps = {
  content: string;
  label?: string;
};

// Using emojis in prose is often inaccessible: screen readers typically do a
// pretty rubbish job reading them out and they totally break the flow of the
// text for anyone using one.
//
// This component is a simple span wrapper that _either_ renders the emoji with
// an aria-label (and the appropriate role) if a label is provided, or removes it
// from the accessibility tree entirely if not.
//
export default function Emoji({ content, label }: EmojiProps) {
  if (label) {
    return (
      <span role="img" aria-label={label}>
        {content}
      </span>
    );
  } else {
    return <span aria-hidden="true">{content}</span>;
  }
}
