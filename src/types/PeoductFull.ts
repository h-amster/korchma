import { Category } from './Category';
import { Photo } from './Photo';
import { Region } from './Region';
import { Vendor } from './Vendor';
import { Volume } from './Volume';
import { Comment } from './Comment';

export interface ProductFull {
  id: number;
  name: string;
  descriptions: string;
  price: string;
  phone: string;
  site_link: string;
  strength: string;
  taste_parameters: string;
  tastes_together: string;
  count_comments: number;
  isRating: boolean;
  rating: number;
  producer: Vendor;
  volume: Volume;
  drink_type: Category;
  region: Region;
  comments: Comment[];
  photos: Photo[];
}
