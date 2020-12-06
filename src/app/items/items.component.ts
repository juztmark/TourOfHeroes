import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price'];
  items: MatTableDataSource<Item>;
  itemRoute: string = '/item/detail/';

  @ViewChild(MatSort) sort: MatSort;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => {
      this.items = new MatTableDataSource(items);
      this.sort.sort(({ id: 'name', start: 'asc'}) as MatSortable);
      this.items.sort = this.sort;
    });
  }
}
