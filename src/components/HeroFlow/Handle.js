import React from 'react';
import { Handle as RfHandle } from 'reactflow';

const defaultStyle = {
  width: 10,
  height: 10,
  backgroundColor: '#BDC4CC',
  border: 'none',
};

export default function Handle({ style, label, ...props }) {
  return <RfHandle style={{ ...defaultStyle, ...style }} {...props} />;
}
