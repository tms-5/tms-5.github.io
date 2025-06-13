import { useEffect, useState } from "react";

export default function MindMap() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const data = {
    eduardo: [
      {
        name: "IA",
        child: ["RAG", "ONNX"],
      },
      {
        name: "ML",
        child: ["Scikit-Learn", "MLflow", "PyTorch"],
      },
      {
        name: "Backend",
        child: ["FastAPI", "Celery", "Redis"],
      },
      {
        name: "Dados",
        child: ["Pandas", "Redis", "MongoDB", "PostgreSQL"],
      },
    ],
  };

  useEffect(() => {
    const centerX = 400;
    const centerY = 300;
    const groupSpacing = 150;
    const childSpacing = 50;

    const nodes = [{ id: "eduardo", label: "Eduardo", x: centerX, y: centerY, class: "main-node" }];
    const edges = [];

    const sideCount = data.eduardo.length;
    const leftGroups = data.eduardo.slice(0, Math.ceil(sideCount / 2));
    const rightGroups = data.eduardo.slice(Math.ceil(sideCount / 2));

    const layoutGroup = (groups, direction) => {
      groups.forEach((group, i) => {
        const gx = centerX + direction * groupSpacing;
        const gy =
          centerY + (i - groups.length / 2) * 100 + (group.yOffset || 0);

        nodes.push({ id: group.name, label: group.name, x: gx, y: gy, class: "group-node" });
        edges.push({ from: "eduardo", to: group.name, class: "group-edge" });

        group.child.forEach((child, j) => {
          const cx = gx + direction * groupSpacing;
          const cy = gy + (j - group.child.length / 2) * childSpacing;
          nodes.push({
            id: `${group.name}-${child}`,
            label: child,
            x: cx,
            y: cy,
            class: "child-node",
          });
          edges.push({ from: group.name, to: `${group.name}-${child}`, class: "child-edge"});
        });
      });
    };

    layoutGroup(
      leftGroups.map((g, i) => ({
        ...g,
        yOffset: i === 1 ? 80 : 0,
      })),
      -1
    );

    layoutGroup(
      rightGroups.map((g, i) => ({
        ...g,
        yOffset: i === 1 ? 80 : 0,
      })),
      1
    );

    setNodes(nodes);
    setEdges(edges);
  }, []);

  const curvedPath = (x1, y1, x2, y2) => {
    const mx = (x1 + x2) / 2;
    return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
  };

  return (
    <svg width="100%" height="100vh" style={{ background: "#0f0f1a" }}>
      {edges.map((e, i) => {
        const from = nodes.find((n) => n.id === e.from);
        const to = nodes.find((n) => n.id === e.to);
        return (
          <path
            key={i}
            d={curvedPath(from.x, from.y, to.x, to.y)}
            fill="none"
            stroke="#32baff"
            strokeWidth="2"
            className={e.class}
          />
        );
      })}
      {nodes.map((node, i) => (
        <g key={i} className={node.class}>
          <rect
            x={node.x - 40}
            y={node.y - 16}
            width="80"
            height="32"
            rx="10"
            ry="10"
            fill="#121f28"
            stroke="#32baff"
            strokeWidth="2"
          />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fontSize="10"
            fill="#fff"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
