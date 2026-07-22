import BaseNode from "../components/BaseNode";

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      inputs={[
        {
          id: `${id}-request`,
          top: "50%",
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
        🌐 REST API Call
      </div>
    </BaseNode>
  );
}