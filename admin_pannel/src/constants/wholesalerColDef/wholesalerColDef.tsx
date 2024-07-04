import axios from "axios";

const handleSwitchChange = async (id: string, checked: boolean) => {
  const newStatus = checked ? "APPROVED" : "PENDING";
  console.log("====> Checking", newStatus);

  try {
    const response = await axios.patch(
      `http://localhost:8989/api/v1/wholesaler/update-wholesaler-status`,
      {
        id: id,
        status: newStatus,
      }
    );
    console.log("======>updated", response.data.result);
  } catch (error) {
    console.error("Error updating wholesaler status:", error);
  }
};

export const colDefs = [
  { headerName: "Name", field: "name" },
  { headerName: "Contact Name", field: "contact_name" },
  { headerName: "Contact Phone", field: "contact_phone" },
  { headerName: "Contact Email", field: "contact_email" },
  { headerName: "Trade License Number", field: "trade_licensce_number" },
  { headerName: "NID Number", field: "nid_number" },
  {
    headerName: "Status",
    field: "status",
    cellRenderer: ({ value }: any) => {
      return (
        <div>
          <input
            type="checkbox"
            checked={value === "APPROVED"}
            onChange={(event) =>
              handleSwitchChange(value._id, event.target.checked)
            }
          />
          <span style={{ marginLeft: 5 }}>{value}</span>
        </div>
      );
    },
  },
  { headerName: "Created At", field: "createdAt" },
  { headerName: "Updated At", field: "updatedAt" },
];
