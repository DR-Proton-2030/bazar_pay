export interface ICustomer {
  full_name: string;
  email: string;
  phone: string;
  gender: string;
  state: string;
  address: string;
  profile_photo: string;
  is_disabled: boolean;
  referal_code: string;
  refered_by_code: string | null;
  password: string;
}
