import React, { useState, useCallback } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
} from 'react-flow-renderer';

import ZoomNode from './ZoomNode';

import './index.css';

const snapGrid = [20, 20];
const nodeTypes = {
  zoom: ZoomNode,
};

const initialElements = [
  {
    id: '1',
    type: 'zoom',
    data: {
      content: <>Zoom to toggle content and placeholder</>,
    },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'zoom',
    data: { content: <>this is a node with some lines of text in it.</> },
    position: { x: 300, y: 50 },
  },
  {
    id: '3',
    type: 'zoom',
    data: { content: <>this is another node with some more text.</> },
    position: { x: 650, y: 50 },
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
  },
];

const CustomNodeFlow = () => {
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );
  const onConnect = useCallback(
    (params) =>
      setElements((els) => addEdge({ ...params, animated: true }, els)),
    []
  );

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultZoom={1.5}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};

export default CustomNodeFlow;
