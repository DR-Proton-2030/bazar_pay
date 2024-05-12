import axios from "axios";
import { PYTHON_SERVER_URL } from "../config/config";

export const callPythonServer = async (
  file: File,
  project_object_id: string
) => {
  const formdata = new FormData();
  formdata.append("image", file);
  formdata.append("project_object_id", project_object_id);
  const response = await axios.post(`${PYTHON_SERVER_URL}/detect`, formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  const {
    data: { result },
  } = response;
  return result;
};
