import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import React from "react";
import { IDownloadProps } from "../../../@types/props/Download.props";

const Download: React.FC<IDownloadProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      className="download-btn"
      endIcon={<FileDownloadOutlinedIcon />}
    >
      Download
    </Button>
  );
};

export default Download;
