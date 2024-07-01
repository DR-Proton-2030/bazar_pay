// File: ../../ts/interfaces/subcategory.interface.ts

import { Types } from "mongoose";

export interface ISubcategorySchema {
    name: string;
    description?: string;
    category: Types.ObjectId;
}
