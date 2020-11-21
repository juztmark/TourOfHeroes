import { Item } from './item';

export const AllItems: Item[] = [
  { id: 18, name: 'Twezzers', price: 271 },
  { id: 24, name: 'Stockings', price: 678 },
  { id: 34, name: 'Playing Card', price: 305 },
  { id: 11, name: 'Tire Swing', price: 957 },
  { id: 17, name: 'Photo Album', price: 251 },
  { id: 45, name: 'Glasses', price: 195 },
  { id: 77, name: 'Cup', price: 126 },
  { id: 12, name: 'Leg Warmers', price: 1864 },
  { id: 40, name: 'Headphones', price: 4576 },
  { id: 78, name: 'Ice Cube Tray', price: 1425 },
];

export const MockItems: Item[] = AllItems.slice(5);
