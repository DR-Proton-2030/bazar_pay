import { IBuilder } from "../../@types/interface/Builder.interface";
import { ICustomer } from "../../@types/interface/Customer.interface";
import * as XLSX from "xlsx";
import { IProduct } from "../../@types/interface/product.interface";

// type guard for Customer
const isCustomer = (data: any): data is ICustomer => {
  return (data as ICustomer).full_name !== undefined;
};

//type guard for Builder
const isBuilder = (data: any): data is IBuilder => {
  return (data as IBuilder).builder_name !== undefined;
};

//type guard for Project
const isProduct = (data: any): data is IProduct => {
  return (data as IProduct).product_name !== undefined;
};

export const downloadExcel = (
  rawData: ICustomer[] | IBuilder[] | IProduct[],
  dataType: "customer" | "builder" | "product"
) => {
  console.log("yo", rawData);
  const processedData = rawData.map((data) => {
    if (isCustomer(data)) {
      const { full_name, email, gender, phone, address, state } =
        data as ICustomer;
      return {
        "Full Name": full_name,
        Email: email,
        Gender: gender || "",
        "Phone Number": phone || "",
        Address: address || "",
        State: state || "",
      };
    } else if (isBuilder(data)) {
      const {
        builder_name,
        builder_number,
        cin_number,
        number_projects,
        contact_first_name,
        contact_last_name,
        contact_phone_number,
        email,
        GST_number,
        PAN,
      } = data as IBuilder;
      return {
        "Builder's Name": builder_name,
        "Builder Number": builder_number,
        "CIN Number": cin_number,
        "Number of Projects": number_projects,
        "Contact First Name": contact_first_name,
        "Contact Last Name": contact_last_name,
        "Contact Phone Number": contact_phone_number,
        Email: email,
        "GST Number": GST_number,
        "PAN Number": PAN,
      };
    } else if (isProduct(data)) {
      const {
        product_name,
        unit,
        discount,
        current_stock,
        product_discount,
        total,
        product_description,
        product_saling_price,
        product_buying_price,
        product_warenty
        
      } = data as IProduct;
      return {
        "Product Name": product_name,
        "Unit": unit,
        "Discount": discount,
        "Current Stock": current_stock,
        "Product Discount": product_discount,
        "Description": product_description,
        "Selling Price": product_saling_price,
        "Buying Price": product_buying_price,
        "Warranty": product_warenty,
        "Total": total,
      };
    }
  });
  return () => {
    console.log("yo", processedData);
    if (processedData.length === 0) return alert("No data to download");
    const ws = XLSX.utils.json_to_sheet(processedData);
    const wb = XLSX.utils.book_new();
    const fileName =
      dataType === "customer"
        ? "CustomerData.xlsx"
        : dataType === "builder"
        ? "BuilderData.xlsx"
        : dataType === "product"
        ? "ProjectData.xlsx"
        : "Data.xlsx";

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, fileName);
  };
};
