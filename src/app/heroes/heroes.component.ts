import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'money',
    'health',
    'strength',
    'delete',
  ];
  heroes: MatTableDataSource<Hero>;
  heroRoute: string = '/detail/';

  @ViewChild(MatSort) sort: MatSort;
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = new MatTableDataSource(heroes);
      this.sort.sort({ id: 'name', start: 'asc' } as MatSortable);
      this.heroes.sort = this.sort;
    });
  }

  delete(hero: Hero) {
    this.heroes.data.splice(this.heroes.data.indexOf(hero), 1);
    this.heroes._updateChangeSubscription();
  }
}
