import { Avatar } from "@mui/material";
import { IBuilder } from "../../../../@types/interface/Builder.interface";
import { IWholesaler } from "../../../../@types/interface/wholesaler.interface";

const NIDcellRenderer = ({ data }: { data: IWholesaler }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* <Avatar
        alt="logo"
        src={data.sign_board_photo}
        style={{ width: 30, height: 30 }}
      /> */}

    <img src={data.nid_photo} style={{height: "100%", width: "100%"}}/>

      
    </div>
  );
};

export default NIDcellRenderer;