import { SchemaDefinitionProperty, Types } from "mongoose";

export interface IProduct {
    product_name: string;
    wholesaler_object_id: SchemaDefinitionProperty<Types.ObjectId>;
    product_buying_price: string;
    product_saling_price: string;
    unit: string;
    discount: number;
    current_stock: string;
    free: string;
    product_description: string;
    product_image: string;
    bar_code_photo: string;
    product_warenty: string;
    product_discount: string;
    product_bhat: string;
    total: number;
    product_status:string;
}