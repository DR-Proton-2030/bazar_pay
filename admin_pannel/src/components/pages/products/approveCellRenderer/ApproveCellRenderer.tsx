import React, { useEffect, useState } from "react";
import SwitchCellRenderer from "../../../shared/cellRenderer/SwitchCellRenderer";
import { IProduct } from "../../../../@types/interface/product.interface";
import { api } from "../../../../utils/api";
// import { api } from "../../../../../utils/api";

const ApproveCellRenderer = ({ data }:{data:IProduct}) => {
  const [isApproved, setIsApproved] = useState<boolean>(false);

  const handleChange = async () => {
    const payload = {
      productId: data._id,
      productStatus : isApproved ? "REJECTED" : "APPROVED" ,
    };
    const response = await api.product.updateProductStatus(payload);
    if (response) {
      setIsApproved(!isApproved);
    }
  };

  useEffect(() => {
    const { product_status } = data;
    setIsApproved(product_status === "APPROVED");
  }, [data]);
  return (
    <SwitchCellRenderer checked={isApproved} handleChange={() => {}} key={1} />
  );
};

export default ApproveCellRenderer;
