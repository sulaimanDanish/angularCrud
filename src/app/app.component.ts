import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddDialogBoxComponent } from './add-dialog-box/add-dialog-box.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Angular Crud';

  constructor(public dialog: MatDialog,
    public http: HttpClient) { }

  openDialog() {
    this.dialog.open(AddDialogBoxComponent, {
     width:'50%',
     height:'90%'
    });
  }

}
