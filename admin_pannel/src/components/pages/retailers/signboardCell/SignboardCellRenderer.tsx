import { Avatar } from "@mui/material";
import { IBuilder } from "../../../../@types/interface/Builder.interface";
import { IWholesaler } from "../../../../@types/interface/wholesaler.interface";
import { IRetailers } from "../../../../@types/interface/retailer.interface";

const SignboardCellRenderer = ({ data }: { data: IRetailers }) => {
  return (
    <div style={{ display: "flex", alignItems: "center"}}>
      {/* <Avatar
        alt="logo"
        src={data.sign_board_photo}
        style={{ width: 30, height: 30 }}
      /> */}

    <img src={data.sign_board_photo} style={{width: '100%', height: '100%'}} />

      
    </div>
  );
};

export default SignboardCellRenderer;