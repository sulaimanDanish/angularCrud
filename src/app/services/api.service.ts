import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  addGrocery(data:any){
    return this.http.post<any>("http://localhost:3000/groceryList/",data)
  }

  fetchGrocery(){
    return this.http.get<any>("http://localhost:3000/groceryList/")

  }

}
 