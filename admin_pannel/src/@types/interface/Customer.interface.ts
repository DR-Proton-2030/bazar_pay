// types.ts
export interface ICustomer {
  _id: string;
  full_name: string;
  email: string;
  phone?: string;
  gender?: string;
  state?: string;
  address?: string;
  profile_photo: string;
  is_disabled: boolean;
  referal_code?: string;
  refered_by_code?: string;
  createdAt: string;
  updatedAt: string;
}
