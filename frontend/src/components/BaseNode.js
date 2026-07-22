import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  children,
  inputs = [],
  outputs = [],
  style = {},
}) {
  return (
    <div
      style={{
        width: 240,
        minHeight: 120,
        border: "1px solid #ddd",
        borderRadius: 12,
        background: "#fff",
        padding: 12,
        boxShadow: "0 4px 10px rgba(0,0,0,.08)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        ...style,
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 24,
        }}
      >
        {title}
      </div>

      {inputs.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{
            top: handle.top,
          }}
        />
      ))}

      {children}

      {outputs.map((handle) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{
            top: handle.top,
          }}
        />
      ))}
    </div>
  );
}