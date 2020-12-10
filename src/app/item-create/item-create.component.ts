import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Item } from '../item';
import { Location } from '@angular/common';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css'],
})
export class ItemCreateComponent implements OnInit {
  item: Item;
  itemForm: FormGroup;

  constructor(private location: Location, private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      price: new FormControl('', [Validators.required, ValidateNumber]),
    });
  }

  getErroMessage(input: string) {
    const field = this.itemForm.get(input);
    if (field.hasError('required')) {
      return 'You must enter a value';
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
    if (this.itemForm.valid) {
      const controls = this.itemForm.controls;
      const item = {
        name: controls.name.value,
        price: controls.price.value,
      };
      this.itemService.addItem(item as Item).subscribe();
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
