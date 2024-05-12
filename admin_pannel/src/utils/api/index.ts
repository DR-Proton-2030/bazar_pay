import { loginAdmin } from "./auth/loginAdmin";
import { getOtp } from "./auth/otpAdmin";
import { forwardEnqury, getBooking, getForwardEnquryList, updateEnquiryStatus } from "./booking/booking";
import { getBuilder } from "./builders/getBuilder";
import { getBuilderByID } from "./builders/getBuilderByID";
import { addBuilder } from "./builders/postBuilder";
import { getCustomer } from "./customer/getCustomer";
import { getEmployeeList } from "./employee/getEmployee";
import { createAdmin } from "./permission/userManagement/createAdmin";
import { getBuilderList } from "./permission/userManagement/getBuilderList";
import { addPlot } from "./projects/addProject";
import { adminAssignProject } from "./projects/assignProject";
import { getAdminPlots, getAssignedProjectList, getProjectDetails } from "./projects/getAdminProjects";
import { getAllProjects, getPlots } from "./projects/getProjects";
import { updatePlotPostion } from "./projects/updatePlotPosition";

export const api = {
  customer: {
    getCustomer,
  },
  builder: {
    getBuilder,
    addBuilder,
    getBuilderByID,
  },
  admin: {
    createAdmin,
    adminAssignProject,
    getEmployeeList,
  },
  auth: {
    loginAdmin,
    getOtp,
  },
  permission: {
    getBuilderList: getBuilderList,
  },
  project: {
    addPlot,
    getPlots,
    getAdminPlots,
    getProjectDetails,
    getAllProjects,
    getAssignedProjectList,
    updatePlotPostion
  },
  booking: {
    getBooking,
    forwardEnqury,
    getForwardEnquryList,
    updateEnquiryStatus
  },
};
