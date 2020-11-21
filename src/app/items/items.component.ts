import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) {}

  getItems(): void {
    this.itemService.getMockItems().subscribe((items) => (this.items = items));
  }

  ngOnInit(): void {
    this.getItems();
  }
}
