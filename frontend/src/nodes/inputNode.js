import { useState } from "react";
import BaseNode from "../components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [inputType, setInputType] = useState(
    data?.inputType || "Text"
  );

  return (
    <BaseNode
      title="Input"
      outputs={[
        {
          id: `${id}-value`,
          top: "50%",
        },
      ]}
    >
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        Name

        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
          }}
        />
      </label>

      <label
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        Type

        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
          }}
        >
          <option>Text</option>
          <option>File</option>
        </select>
      </label>
    </BaseNode>
  );
};