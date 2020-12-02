import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const items: Item[] = [
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

    const heroes: Hero[] = [
      { id: 11, name: 'Dr Nice', items: [items[0]], money: 1500 },
      { id: 12, name: 'Narco', items: [items[1]], money: 1500 },
      { id: 13, name: 'Bombasto', items: [items[2]], money: 1500 },
      { id: 14, name: 'Celeritas', items: [items[3]], money: 1500 },
      { id: 15, name: 'Magneta', items: [items[4]], money: 1500 },
      { id: 16, name: 'RubberMan', items: [items[0]], money: 1500 },
      { id: 17, name: 'Dynama', items: [items[1]], money: 1500 },
      { id: 18, name: 'Dr IQ', items: [items[2]], money: 1500 },
      { id: 19, name: 'Magma', items: [items[3]], money: 1500 },
      { id: 20, name: 'Tornado', items: [items[4]], money: 1500 },
    ];

    return { heroes, items };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
