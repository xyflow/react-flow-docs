import { useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';

import countries from './countries.js';

function createGraph() {
  const rootNode = { id: 'WORLD', data: { label: 'World' }, position: { x: 0, y: 0 } };
  const continentNodes = countries.reduce((result, country) => {
    const id = country.Continent.toUpperCase();
    if (!result.find((res) => res.id === id)) {
      result.push({
        id,
        data: { label: country.Continent, parent: 'WORLD' },
        position: { x: 0, y: 0 },
      });
    }
    return result;
  }, []);
  const countryNodes = countries.map((country) => ({
    id: country.Code,
    data: { label: country.Entity, parent: country.Continent.toUpperCase() },
    position: { x: 0, y: 0 },
  }));
  return [rootNode, ...continentNodes, ...countryNodes];
}

function createEdges(nodes) {
  return nodes.reduce((edges, node) => {
    if (node.data.parent) {
      const source = node.data.parent;
      const target = node.id;
      edges.push({ id: `${source}->${target}`, source, target });
    }
    return edges;
  }, []);
}

const initialNodes = createGraph();
const initialEdges = createEdges(initialNodes);

function Flow() {
  const { getNodes, getEdges, fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const layoutNodes = useCallback(() => {
    const nodes = getNodes();
    const edges = getEdges();

    // implement layout here
    const nodeChanges = nodes.map((node) => {
      return {
        type: 'position',
        id: node.id,
        position: {
          x: Math.random() * 1000,
          y: Math.random() * 1000,
        },
      };
    });

    onNodesChange(nodeChanges);
  }, [getNodes, getEdges, fitView]);

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodes={nodes}
        edges={edges}
        onInit={layoutNodes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
