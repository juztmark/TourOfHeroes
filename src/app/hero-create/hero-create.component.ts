import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css'],
})
export class HeroCreateComponent implements OnInit {
  hero: Hero;
  heroForm: FormGroup;

  statFormControl = [
    Validators.required,
    Validators.min(1),
    Validators.max(10),
    ValidateNumber,
  ];

  constructor(private location: Location, private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      money: new FormControl('', [Validators.required, ValidateNumber]),
      health: new FormControl('', [...this.statFormControl]),
      strength: new FormControl('', [...this.statFormControl]),
    });
  }

  getErroMessage(input: string) {
    const field = this.heroForm.get(input);
    if (field.hasError('required')) {
      return 'You must enter a value';
    }
    if (field.hasError('min') || field.hasError('max')) {
      return 'Must be number from range 1-10';
    }
    if (field.hasError('notNumber')) {
      return 'Must be a number';
    }
    if (field.hasError('maxlength')) {
      return 'Max 20 characters';
    }
    if (field.hasError('pattern')) {
      return 'Only letters allowed';
    }
  }

  submit() {
    if (this.heroForm.valid) {
      const controls = this.heroForm.controls;
      const hero = {
        name: controls.name.value,
        items: [],
        money: controls.money.value,
        health: controls.health.value,
        strength: controls.strength.value,
      };
      this.heroService.addHero(hero as Hero).subscribe();
      this.location.back();
    }
  }
}

function ValidateNumber(
  control: AbstractControl
): { [key: string]: any } | null {
  const value = +control.value;
  return typeof value === 'number' && !isNaN(value)
    ? null
    : { notNumber: true };
}
