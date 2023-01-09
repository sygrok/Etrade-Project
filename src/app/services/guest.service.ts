import { productsModal } from './../models/productsModal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  path= 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<productsModal[]> {
    return this.httpClient.get<productsModal[]>(this.path);
  }
}
