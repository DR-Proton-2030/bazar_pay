import React from "react";

const StatusCell = ({ value, data, handleSwitchChange }: any) => {
  const id = data._id;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        style={{ width: 20, height: 20 }}
        type="checkbox"
        checked={value === "APPROVED"}
        onChange={(event) => handleSwitchChange(id, event.target.checked)}
      />
      <span style={{ marginLeft: 5 }}>{value}</span>
    </div>
  );
};

export default StatusCell;
