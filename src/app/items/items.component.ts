import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { orderBy } from 'lodash';
import { itemSortOptions, Sort, sortTypes } from '../sort';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[];
  sortTypes: string[] = sortTypes;
  sortOptions: string[] = itemSortOptions;
  sort: Sort = {
    sortBy: 'name',
    sortType: 'asc',
  };

  constructor(private itemService: ItemService) {}

  getItems(): void {
    this.itemService
      .getItems()
      .subscribe(
        (items) =>
          (this.items = orderBy(items, this.sort.sortBy, this.sort.sortType))
      );
  }

  ngOnInit(): void {
    this.getItems();
  }

  handleSort(sortBy: string, sortType: 'asc' | 'desc') {
    this.sort.sortBy = sortBy;
    this.sort.sortType = sortType;
    this.getItems();
  }
}
