import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.css'],
})
export class ItemShopComponent implements OnInit {
  items: Item[];
  hero: Hero;

  constructor(
    private itemService: ItemService,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getItems();
    this.getHero();
  }

  getItems(): void {
    this.itemService.getItems().subscribe((items) => (this.items = items));
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  canBuy(item: Item): boolean {
    return item.price > this.hero.money ? false : true;
  }

  buy(item: Item) {
    this.hero.money -= item.price;
    this.hero.items.push(item);
  }

  goBack() {
    this.location.back();
  }
}
