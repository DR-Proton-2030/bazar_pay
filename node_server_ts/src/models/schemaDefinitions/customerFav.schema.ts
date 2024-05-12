import { Schema } from "mongoose";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { ICustomerFavProject } from "../../@types/types/cutsomerFav.interface";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";

const customerFavProjectSchema: Schema<ICustomerFavProject> =
  new Schema<ICustomerFavProject>(
    {
      customer_object_id: SCHEMA_DEFINITION_PROPERTY.optionalNullObjectId,
      project_object_id: SCHEMA_DEFINITION_PROPERTY.optionalNullObjectId,
    },
    GENERAL_SCHEMA_OPTIONS
  );

export default customerFavProjectSchema;
