import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { green } from "@mui/material/colors";
import "./pagination.css";

const BasicPagination = ({
  currentPage,
  handlePageChange,
  pageCount,
}: any) => {
  const color = green[900];
  return (
    <div
      style={{
        alignItems: "right",
        justifyContent: "right",
        display: "flex",
        marginTop: "20px",
      }}
    >
      {/* <Pagination
        count={pageCount}
        page={currentPage}
        variant="outlined"
        sx={{ color }}
        onChange={handlePageChange}
      /> */}
    </div>
  );
};

export default BasicPagination;
