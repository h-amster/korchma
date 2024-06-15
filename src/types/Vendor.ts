import { Region } from './Region';

export interface Vendor {
  id: number;
  name: string;
  logo: string;
  image: string;
  about: string;
  phone: string;
  email: string;
  insta: string;
  fb: string;
  region: Region;
  drink_types: string[];
}
