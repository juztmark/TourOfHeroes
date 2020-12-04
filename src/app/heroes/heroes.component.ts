import { Component, OnInit } from '@angular/core';
import { orderBy } from 'lodash';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { heroSortOptions, Sort, sortTypes } from '../sort';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  sortOptions = heroSortOptions;
  sortTypes = sortTypes;
  sort: Sort = {
    sortBy: 'name',
    sortType: 'asc',
  };

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(
        (heroes) =>
          (this.heroes = orderBy(heroes, this.sort.sortBy, this.sort.sortType))
      );
  }

  handleSort(sortby: string, sortType: 'asc' | 'desc') {
    this.sort.sortBy = sortby;
    this.sort.sortType = sortType;
    this.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero(name).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
