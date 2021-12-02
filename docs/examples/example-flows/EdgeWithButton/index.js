import React, { useState } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';

import ButtonEdge from './ButtonEdge';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const initialElements = [
  {
    id: 'ewb-1',
    type: 'input',
    data: { label: 'Input 1' },
    position: { x: 250, y: 0 },
  },
  { id: 'ewb-2', data: { label: 'Node 2' }, position: { x: 250, y: 300 } },

  {
    id: 'edge-1-2',
    source: 'ewb-1',
    target: 'ewb-2',
    type: 'buttonedge',
  },
];

const edgeTypes = {
  buttonedge: ButtonEdge,
};

const EdgeWithButtonFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) =>
    setElements((els) => addEdge({ ...params, type: 'buttonedge' }, els));

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      snapToGrid={true}
      edgeTypes={edgeTypes}
      onLoad={onLoad}
      key="edge-with-button"
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default EdgeWithButtonFlow;
