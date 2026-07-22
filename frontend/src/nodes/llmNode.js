import BaseNode from "../components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        {
          id: `${id}-system`,
          top: "35%",
        },
        {
          id: `${id}-prompt`,
          top: "70%",
        },
      ]}
      outputs={[
        {
          id: `${id}-response`,
          top: "50%",
        },
      ]}
    >
      <div
        style={{
          textAlign: "center",
          marginTop: 20,
          fontSize: 16,
        }}
      >
        🤖 This is an LLM
      </div>
    </BaseNode>
  );
}