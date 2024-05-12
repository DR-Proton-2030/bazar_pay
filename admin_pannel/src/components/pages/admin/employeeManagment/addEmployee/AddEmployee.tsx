import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  OutlinedInput,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { api } from "../../../../../utils/api";
import BuilderContext from "../../../../../contexts/builderContext/BuilderContext";
import { ROLES } from "../../../../../constants/roles/Roles";
import { IProject } from "../../../../../@types/interface/Projects";
import { IUser } from "../../../../../@types/interface/user.interface";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(
  projectId: string,
  selectedProjectIds: string[],
  theme: any
) {
  return {
    fontWeight:
      selectedProjectIds.indexOf(projectId) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddEmployee: React.FC = () => {
  const { builderDetails } = useContext(BuilderContext);
  const theme = useTheme();
  const [projectManager, setProjectManager] = useState<IUser | null>(null);
  const [rowData, setRowData] = useState<IProject[]>([]);
  const [selectedProjectIds, setSelectedProjectIds] = useState<string[]>([]);
  const [employeeDetails, setEmployeeDetails] = useState<IUser>({
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
    is_disabled: false,
    role: "",
    has_company_all_access: false,
    has_all_state_access: false,
    has_all_project_acess: false,
    builder_object_id: builderDetails?._id || "",
    assigned_state_list: [],
    last_login_date: new Date().toString(),
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setEmployeeDetails((prevDetails: any) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCreateEmployee = async () => {
    const response = await api.admin.createAdmin(employeeDetails);
    if (response) {
      alert("Employee created successfully");
      if (employeeDetails.role === ROLES.project_manager) {
        setProjectManager(response);
        setHasSubmitted(true);
      }
    }
  };

  const handleAssignedProject = async () => {
    console.log(selectedProjectIds);
    if (projectManager) {
      const payload = {
        admin_object_id: projectManager._id,
        builder_object_id: builderDetails?._id,
        project_object_id_list: selectedProjectIds,
      };
      const response = await api.admin.adminAssignProject(payload);
      if (response) {
        alert("Admin Assigned to Project Successfully");
      }
    }
  };

  const handleSubmitButtonClick = () => {
    if (employeeDetails.role === ROLES.project_manager && hasSubmitted) {
      handleAssignedProject();
    } else {
      handleCreateEmployee();
    }
  };

  const fetchProjects = useCallback(async () => {
    try {
      if (!builderDetails || !builderDetails._id) return;
      const response = await api.project.getAllProjects({
        builder_object_id: builderDetails._id,
      });
      if (response) {
        setRowData(response);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }, [builderDetails]);

  const handleProjectChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;
    setSelectedProjectIds(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <div>
      <h3>Employee Details</h3>
      <Accordion defaultExpanded style={{ marginTop: "30px" }}>
        <AccordionDetails>
          {/* Full Name */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "15px",
            }}
          >
            <label>Full Name:</label>
            <TextField
              type="text"
              name="full_name"
              style={{ width: "700px" }}
              onChange={handleChange}
              disabled={hasSubmitted}
            />
          </div>

          {/* Email */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "15px",
            }}
          >
            <label>Email:</label>
            <TextField
              type="email"
              name="email"
              style={{ width: "700px" }}
              onChange={handleChange}
              disabled={hasSubmitted}
            />
          </div>

          {/* Password */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "15px",
            }}
          >
            <label>Password:</label>
            <TextField
              type="password"
              name="password"
              style={{ width: "700px" }}
              onChange={handleChange}
              disabled={hasSubmitted}
            />
          </div>

          {/* Phone Number */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "15px",
            }}
          >
            <label>Phone Number:</label>
            <TextField
              type="number"
              name="phone_number"
              style={{ width: "700px" }}
              onChange={(event) => handleChange(event)}
              disabled={hasSubmitted}
            />
          </div>

          {/* Role */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "15px",
            }}
          >
            <label>Role:</label>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="role-select-label">Select Role</InputLabel>
                <Select
                  labelId="role-select-label"
                  id="role-select"
                  name="role"
                  value={employeeDetails.role}
                  style={{ width: "700px" }}
                  onChange={handleChange}
                  disabled={hasSubmitted}
                >
                  <MenuItem value={ROLES.wholesaler_admin}>
                   Wholesaler
                  </MenuItem>
                  <MenuItem value={ROLES.retailer}>
                    Retailer
                  </MenuItem>
                 
                </Select>
              </FormControl>
            </Box>
          </div>

          {/* Assigned Project */}
          {employeeDetails.role === ROLES.project_manager && hasSubmitted && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "15px",
              }}
            >
              <label>Assigned Project:</label>
              <Box sx={{ minWidth: "700px" }}>
                <FormControl fullWidth>
                  <InputLabel id="assigned-project-select-label">
                    Select Assigned Projects
                  </InputLabel>
                  <Select
                    labelId="assigned-project-select-label"
                    id="assigned-project-select"
                    multiple
                    value={selectedProjectIds}
                    onChange={handleProjectChange}
                    input={<OutlinedInput label="Assigned Projects" />}
                    MenuProps={MenuProps}
                    renderValue={(selected) =>
                      rowData
                        .filter((project) =>
                          selected.includes(project.project_name)
                        )
                        .map((project) => project.project_name)
                        .join(", ")
                    }
                  >
                    {rowData.map((project) => (
                      <MenuItem
                        key={project._id}
                        value={project._id}
                        style={getStyles(
                          project.project_name,
                          selectedProjectIds,
                          theme
                        )}
                      >
                        {project.project_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
          )}
        </AccordionDetails>

        {/* Submit Button */}
        <Button
          variant="contained"
          type="submit"
          style={{
            marginBottom: "20px",
            marginLeft: "20px",
            backgroundColor: "#49BB43",
          }}
          onClick={handleSubmitButtonClick}
        >
          {employeeDetails.role === ROLES.project_manager && !hasSubmitted
            ? "Next"
            : "Submit"}
        </Button>
      </Accordion>
    </div>
  );
};

export default AddEmployee;
