import { Photo } from './Photo';
import { Vendor } from './Vendor';

export interface Drink {
  id: number;
  name: string;
  descriptions: string;
  price: string;
  phone: string;
  site_link: string;
  strength: string;
  taste_parameters: string;
  tastes_together: string;
  isRating: boolean;
  rating: number;
  volume: { id: number; name: string };
  drink_type: { id: number; name: string };
  region: { id: number; name: string };
  count_comments: number;
  photos: Photo[];
  producer: Vendor;
}
