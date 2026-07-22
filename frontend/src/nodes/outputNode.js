import { useState } from "react";
import BaseNode from "../components/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || "Text"
  );

  return (
    <BaseNode
      title="Output"
      inputs={[
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
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
          }}
        >
          <option>Text</option>
          <option>Image</option>
        </select>
      </label>
    </BaseNode>
  );
};