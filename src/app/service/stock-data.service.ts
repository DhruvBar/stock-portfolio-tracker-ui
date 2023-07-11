import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    return this.http.get(API_URL + 'user/detail');
  }

  searchStocks(query): Observable<any> {
    return this.http.get(API_URL + 'stock/search?query=' + query );
  }

  getCompanyDetails(query): Observable<any> {
    return this.http.get(API_URL + 'stock/detail?symbol=' + query );
  }

  addStockToPortFolio(addStockRequest): Observable<any> {
    return this.http.post(API_URL + 'stock/add/holding', addStockRequest);
  }

}
