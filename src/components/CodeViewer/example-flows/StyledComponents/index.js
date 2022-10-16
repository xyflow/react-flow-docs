import React, { useCallback, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'reactflow';
import styled, { ThemeProvider } from 'styled-components';

import { nodes as initialNodes, edges as initialEdges } from './nodes-edges';
import { darkTheme, lightTheme } from './theme';
import CustomNode from './CustomNode';

import 'reactflow/dist/style.css';

const nodeTypes = {
  custom: CustomNode,
};

const ReactFlowStyled = styled(ReactFlow)`
  background-color: ${(props) => props.theme.bg};
`;

const MiniMapStyled = styled(MiniMap)`
  background-color: ${(props) => props.theme.bg};

  .react-flow__minimap-mask {
    fill: ${(props) => props.theme.minimapMaskBg};
  }

  .react-flow__minimap-node {
    fill: ${(props) => props.theme.nodeBg};
    stroke: none;
  }
`;

const ControlsStyled = styled(Controls)`
  button {
    background-color: ${(props) => props.theme.controlsBg};
    color: ${(props) => props.theme.controlsColor};
    border-bottom: 1px solid ${(props) => props.theme.controlsBorder};

    &:hover {
      background-color: ${(props) => props.theme.controlsBgHover};
    }

    path {
      fill: currentColor;
    }
  }
`;

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlowStyled
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <MiniMapStyled />
      <ControlsStyled />
    </ReactFlowStyled>
  );
};

export default () => {
  const [mode, setMode] = useState('light');
  const theme = mode === 'light' ? lightTheme : darkTheme;

  const toggleMode = () => {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <button onClick={toggleMode} style={{ position: 'absolute', zIndex: 100, left: 10, top: 10 }}>
        switch mode
      </button>
      <Flow />
    </ThemeProvider>
  );
};
