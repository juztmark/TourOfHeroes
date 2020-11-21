import { Injectable } from '@angular/core';
import { Item } from './item';
import { AllItems, MockItems } from './mock-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  getAllItems(): Observable<Item[]> {
    return of(AllItems);
  }

  getMockItems(): Observable<Item[]> {
    return of(MockItems);
  }

  getItem(id: number): Observable<Item> {
    return of(AllItems.find((e) => e.id === id));
  }
}
