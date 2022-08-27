import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-dialog-box',
  templateUrl: './add-dialog-box.component.html',
  styleUrls: ['./add-dialog-box.component.scss']
})
export class AddDialogBoxComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
  ) { }

  groceryList !: FormGroup

  ngOnInit(): void {
    this.groceryList = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      buy: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]

    })

  }


  foods: Food[] = [
    { value: 'vegetable', viewValue: 'Vegetable/Fruit' },
    { value: 'nonVeg', viewValue: 'Meat/Fish' },
    { value: 'dairy', viewValue: 'Dairy' },
    { value: 'spice', viewValue: 'Spices' },
  ];

  addItem() {
    if (this.groceryList.valid) {
      this.api.addGrocery(this.groceryList.value)
        .subscribe({
          next:(res)=>{
          },
          error:()=>{

          }
        })
    }
  }


}

interface Food {
  value: string;
  viewValue: string;
}