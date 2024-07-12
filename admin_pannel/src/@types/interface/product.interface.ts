import { IWholesaler } from "./wholesaler.interface";

export interface IProduct {
    _id?: string;
    product_name: string;
    wholesalerSaler_id: string;
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
    product_status: string;
   
    category_object_id: string;
	subcategory_object_id: string;
	brand_object_id: string;
}