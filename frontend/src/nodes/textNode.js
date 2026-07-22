import { useMemo, useState } from "react";
import BaseNode from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "{{input}}"
  );

  // Detect variables like {{name}}
  const variables = useMemo(() => {
    const matches = [
      ...currText.matchAll(/{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g),
    ];

    return [...new Set(matches.map((m) => m[1]))];
  }, [currText]);

  const inputHandles = variables.map((variable, index) => ({
    id: `${id}-${variable}`,
    top: `${65 + index * 28}px`,
  }));

  return (
    <BaseNode
      title="Text"
      inputs={inputHandles}
      outputs={[
        {
          id: `${id}-output`,
          top: "50%",
        },
      ]}
      style={{
        minHeight: Math.max(170, 150 + variables.length * 30),
      }}
    >
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          fontWeight: 500,
        }}
      >
        Text

        <textarea
          rows={4}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            padding: "8px",
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            resize: "vertical",
          }}
        />
      </label>

      {variables.length > 0 && (
        <div
          style={{
            fontSize: 13,
          }}
        >
          <strong>Variables</strong>

          {variables.map((v) => (
            <div key={v}>• {v}</div>
          ))}
        </div>
      )}
    </BaseNode>
  );
};