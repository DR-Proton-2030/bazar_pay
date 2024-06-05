import { model } from "mongoose";

import adminSchema from "./schemaDefinitions/admin.schema";
import { IAdmin } from "../@types/types/admin.interfcae";

const AdminModel = model<IAdmin>("admins", adminSchema);

export default AdminModel;
