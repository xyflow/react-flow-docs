import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Sandpack } from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';

import styles from './code-viewer.module.css';

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
    'react-flow-renderer': '10.0.0-next.33',
  },
};

const defaultOptions = {
  editorHeight: 800,
  editorWidthPercentage: 45,
  wrapContent: true,
};

export default function CodeViewer({
  codePath,
  additionalFiles = [],
  applyStyles = true,
  options = defaultOptions,
  activeFile = null,
}) {
  const [files, setFiles] = useState(null);

  useEffect(() => {
    const loadFiles = async () => {
      const res = await import(`!raw-loader!./${codePath}/index.js`);

      const additional = {};

      for (let additionalFile of additionalFiles) {
        const file = await import(`!raw-loader!./${codePath}/${additionalFile}`);
        additional[`/${additionalFile}`] = { code: file.default };

        if (additionalFile === activeFile) {
          additional[`/${additionalFile}`].active = true;
        }
      }

      setFiles({
        '/App.js': res.default,
        ...additional,
      });
    };

    loadFiles();
  }, []);

  if (!files) {
    return <div className={clsx(styles.wrapper, styles.placeholder)} />;
  }

  return (
    <div className={applyStyles ? styles.wrapper : null}>
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
