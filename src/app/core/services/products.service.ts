import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';
  constructor( private _http:HttpClient) { }

  getProducts(): Observable<any[]> {
    return this._http.get<any[]>(this.apiUrl);
  }
  getProductById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.get<any>(url);
  }
}
