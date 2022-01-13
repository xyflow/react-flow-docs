import React, { useEffect, useState } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';

import styles from './examples-viewer.module.css';

const hiddenBaseStyles = {
  '/styles.css': {
    code: `
html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
`,
    hidden: true,
  },
};

const customSetup = {
  dependencies: {
    'react-flow-renderer': '10.0.0-next.32',
  },
};

const options = {
  editorHeight: 800,
  editorWidthPercentage: 45,
  wrapContent: true,
};

export default function ExampleViewer({ example, additionalFiles = [] }) {
  const [files, setFiles] = useState(null);

  useEffect(() => {
    const loadFiles = async () => {
      const res = await import(`!raw-loader!../example-flows/${example}/index.js`);

      const additional = {};

      for (let additionalFile of additionalFiles) {
        const file = await import(`!raw-loader!../example-flows/${example}/${additionalFile}`);
        additional[`/${additionalFile}`] = file.default;
      }

      setFiles({
        '/App.js': res.default,
        ...additional,
      });
    };

    loadFiles();
  }, []);

  if (!files) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Sandpack
        template="react"
        files={{
          ...files,
          ...hiddenBaseStyles,
        }}
        customSetup={customSetup}
        options={options}
      />
    </div>
  );
}
