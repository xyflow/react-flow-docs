import React, { useEffect, useState, useMemo } from 'react';
import clsx from 'clsx';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
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

const defaultSetup = {
  dependencies: {
    'react-flow-renderer': 'latest',
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
  dependencies = {},
  applyStyles = true,
  options = defaultOptions,
  activeFile = null,
  showEditor = true,
  showPreview = true,
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

  const customSetup = useMemo(
    () => ({
      ...defaultSetup,
      dependencies: {
        ...defaultSetup.dependencies,
        ...dependencies,
      },
    }),
    []
  );

  if (!files) {
    return <div className={clsx(styles.wrapper, styles.placeholder)} />;
  }

  const editorHeight = options?.editorHeight || 800;

  return (
    <div className={applyStyles ? styles.wrapper : null}>
      <SandpackProvider
        template="react"
        customSetup={{
          ...customSetup,
          files: {
            ...files,
            ...hiddenBaseStyles,
          },
        }}
      >
        <SandpackLayout>
          {showEditor && (
            <SandpackCodeEditor
              {...options}
              customStyle={{
                height: editorHeight,
              }}
            />
          )}
          {showPreview && (
            <SandpackPreview
              customStyle={{
                height: editorHeight,
              }}
            />
          )}
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
