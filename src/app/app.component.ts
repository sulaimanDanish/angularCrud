import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddDialogBoxComponent} from '../app/add-dialog-box/add-dialog-box.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Crud';

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AddDialogBoxComponent, {
     width:'50%',
     height:'90%'
    });
  }

}
