import ReactFlow, {
  MiniMap,
  Background,
  BackgroundVariant,
  Controls,
  Position,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomNode from './CustomNode';
import TooltipNode from './TooltipNode';

const nodeTypes = {
  custom: CustomNode,
  tooltip: TooltipNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: { label: 'toolbar top', toolbarPosition: Position.Top },
    position: { x: 0, y: 50 },
    className: 'react-flow__node-default',
  },
  {
    id: '2',
    type: 'custom',
    data: { label: 'toolbar right', toolbarPosition: Position.Right },
    position: { x: 300, y: 0 },
    className: 'react-flow__node-default',
  },
  {
    id: '3',
    type: 'custom',
    data: { label: 'toolbar bottom', toolbarPosition: Position.Bottom },
    position: { x: 400, y: 100 },
    className: 'react-flow__node-default',
  },
  {
    id: '4',
    type: 'custom',
    data: { label: 'toolbar left', toolbarPosition: Position.Left },
    position: { x: 400, y: 200 },
    className: 'react-flow__node-default',
  },
  {
    id: '5',
    type: 'tooltip',
    data: { label: 'hover tooltip', toolbarPosition: Position.Left },
    position: { x: 300, y: 400 },
    className: 'react-flow__node-default',
  },
  {
    id: '6',
    type: 'custom',
    data: { label: 'toolbar always open', toolbarPosition: Position.Top, toolbarVisible: true },
    position: { x: 0, y: 200 },
    className: 'react-flow__node-default',
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
];

const defaultEdgeOptions = { zIndex: 0 };
const nodeOrigin = [0.5, 0.5];

export default function NodeToolbarExample() {
  return (
    <ReactFlow
      defaultNodes={initialNodes}
      defaultEdges={initialEdges}
      className="react-flow-node-toolbar-example"
      minZoom={0.2}
      maxZoom={4}
      fitView
      defaultEdgeOptions={defaultEdgeOptions}
      nodeTypes={nodeTypes}
      nodeOrigin={nodeOrigin}
    >
      <Background variant={BackgroundVariant.Dots} />
      <MiniMap />
      <Controls />
      <Panel>Select and move one of the nodes to see the toolbar</Panel>
    </ReactFlow>
  );
}
