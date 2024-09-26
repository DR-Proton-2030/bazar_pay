import { useContext, useEffect, useState } from "react";
import { CustomerColDefs } from "../../../constants/customer/customerColDefs";
import { api } from "../../../utils/api";
import { ICustomer } from "../../../@types/interface/Customer.interface";
import DataGrid from "../../shared/dataGrid/DataGrid";
import UIContext from "../../../contexts/uiContext/UIContext";
// import DataGrid from "../../shared/dataGrid/DataGrid";

const AllCustomersPage = () => {
  const {setDashboardHeader} = useContext(UIContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [customerData, setCustomerData] = useState<ICustomer[]>([]);
  const fetchCustomers = async (filterQuery: any, page: number) => {
    try {
      const response = await api.customer.getCustomer(filterQuery, page);
      // console.log("Api-Check---REsponse--->", response[0].full_name);
      if (response) {
        const formattedData = response.map((customer: ICustomer) => ({
          ...customer,
          phone: customer.phone ?? "N/A",
          gender: customer.gender ?? "N/A",
          state: customer.state ?? "N/A",
          address: customer.address ?? "N/A",
          referal_code: customer.referal_code ?? "N/A",
          refered_by_code: customer.refered_by_code ?? "N/A",
          createdAt: customer.createdAt
            ? new Date(customer.createdAt).toLocaleDateString("en-GB")
            : "N/A",
          updatedAt: customer.updatedAt
            ? new Date(customer.updatedAt).toLocaleDateString("en-GB")
            : "N/A",
        }));
        setCustomerData(formattedData);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetchCustomers({}, currentPage);
  }, [currentPage]);

  useEffect(()=>{
    setDashboardHeader("All Retailers")
  },[])

  return (
    <div>
      <DataGrid colDefs={CustomerColDefs} rowData={customerData} key={0} onFilterChange={function (filterModel: { [key: string]: { filterType: string; type?: string; filter?: string | number; }; }): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default AllCustomersPage;
