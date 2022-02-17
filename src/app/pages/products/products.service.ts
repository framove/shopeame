import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/products.model';

@Injectable()
export class ProductsService {
  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products'
  }
  getProducts(): Observable<Products> {
    return this.http.get<Products>(`${this.baseUrl}`);
  }
}
