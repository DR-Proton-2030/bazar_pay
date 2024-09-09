import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";

const StatusCell = ({ value, data, handleSwitchChange }: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(value === "ACTIVE");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    handleSwitchChange(data._id, checked);
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* <input
        style={{ width: 20, height: 20 }}
        type="checkbox"
        checked={value === "APPROVED"}
        onChange={(event) => handleSwitchChange(id, event.target.checked)}
      />
      <span style={{ marginLeft: 5 }}>{value}</span> */}
      <Switch checked={isChecked} onChange={handleChange} />
    </div>
  );
};

export default StatusCell;
