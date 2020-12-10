import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const items: Item[] = [
      { id: 1, name: 'Twezzers', price: 271 },
      { id: 2, name: 'Stockings', price: 678 },
      { id: 3, name: 'Playing Card', price: 305 },
      { id: 4, name: 'Tire Swing', price: 957 },
      { id: 5, name: 'Photo Album', price: 251 },
      { id: 6, name: 'Glasses', price: 195 },
      { id: 7, name: 'Cup', price: 126 },
      { id: 8, name: 'Leg Warmers', price: 1864 },
      { id: 9, name: 'Headphones', price: 4576 },
      { id: 10, name: 'Ice Cube Tray', price: 1425 },
    ];

    const heroes: Hero[] = [
      { id: 1, name: 'Dr Nice', items: [items[0]], money: 1500, health: 9, strength: 4 },
      { id: 2, name: 'Narco', items: [items[1]], money: 1500, health: 8, strength: 5 },
      { id: 3, name: 'Bombasto', items: [items[2]], money: 1500, health: 1, strength: 6 },
      { id: 4, name: 'Celeritas', items: [items[3]], money: 1500, health: 2, strength: 7 },
      { id: 5, name: 'Magneta', items: [items[4]], money: 1500, health: 4, strength: 9 },
      { id: 6, name: 'RubberMan', items: [items[0]], money: 1500, health: 7, strength: 8 },
      { id: 7, name: 'Dynama', items: [items[1]], money: 1500, health: 6, strength: 1 },
      { id: 8, name: 'Dr IQ', items: [items[2]], money: 1500, health: 3, strength: 2 },
      { id: 9, name: 'Magma', items: [items[3]], money: 1500, health: 4, strength: 3 },
      { id: 10, name: 'Tornado', items: [items[4]], money: 1500 , health: 1, strength: 3},
    ];

    return { heroes, items };
  }

  genId(obj: { id: number }[]): number {
    return obj.length > 0 ? Math.max(...obj.map((e) => e.id)) + 1 : 1;
  }
}
