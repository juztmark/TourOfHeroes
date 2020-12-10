import { Item } from './item';

export interface Hero {
  id: number;
  name: string;
  money: number;
  health: number;
  strength: number;
  items: Item[];
}
