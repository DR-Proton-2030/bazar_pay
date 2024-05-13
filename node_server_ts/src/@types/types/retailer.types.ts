export interface IRetailer {
  fullName: string;
  email: string;
  phone: string;
  gender: 'male' | 'female' | 'other';
  state: string;
  address: string;
  profilePhoto: string;
  password: string;
  businessName: string;
  businessType: 'sole proprietorship' | 'partnership' | 'corporation' | 'LLC' | 'other';
  businessRegistrationNumber: string;
  businessAddress: string;
  businessPhone: string;
  taxIdentificationNumber: string;
  productsSold: string[];
}
