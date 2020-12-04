import { Injectable } from '@angular/core';
import { Item } from './item';
import { AllItems, MockItems } from './mock-items';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private itemsUrl = 'api/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl).pipe(
      tap((_) => console.log('fetched items')),
      catchError(this.handleError<Item[]>([]))
    );
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap((_) => console.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>())
    );
  }

  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? console.log(`found items matching "${term}"`)
          : console.log(`no items matching "${term}"`)
      ),
      catchError(this.handleError<Item[]>([]))
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
