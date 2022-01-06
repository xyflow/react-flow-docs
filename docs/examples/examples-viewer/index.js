import React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';

import code from '!raw-loader!../example-flows/UpdatableEdge/index.js';
import styles from './examples-viewer.module.css';

export default function SandpackEditor() {
  return (
    <div className={styles.wrapper}>
      <Sandpack
        template="react"
        files={{
          '/App.js': code,
          '/styles.css': {
            code: `
          html, body, #root {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          `,
            hidden: true,
          },
        }}
        customSetup={{
          dependencies: {
            'react-flow-renderer': '9.6.11',
          },
        }}
        options={{
          editorHeight: 800,
          editorWidthPercentage: 45,
          wrapContent: true,
        }}
      />
    </div>
  );
}
