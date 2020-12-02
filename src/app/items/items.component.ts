import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[];
  sortBy: string = 'name';

  constructor(private itemService: ItemService) {}

  getItems(): void {
    this.itemService
      .getItems()
      .subscribe((items) => (this.items = orderBy(items, this.sortBy)));
  }

  ngOnInit(): void {
    this.getItems();
  }

  sort(sortBy: string) {
    this.sortBy = sortBy;
    this.getItems();
  }
}
