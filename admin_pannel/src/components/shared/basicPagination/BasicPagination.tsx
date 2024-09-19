import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { green } from "@mui/material/colors";
import "./pagination.css";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const BasicPagination : React.FC<PaginationProps> = ({
  currentPage,
  handlePageChange,
  pageCount,
}) => {
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
      <Pagination
        count={pageCount}
        page={currentPage}
        variant="outlined"
        sx={{ color }}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default BasicPagination;
