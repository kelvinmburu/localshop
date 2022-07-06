import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //Handle asynchronous requests and responses
//  readonly APIUrl = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
  }



  // Login API method 
  loginUser(val:any) {
    return this.http.post(this.APIUrl + '/login/', val);
  }

  

  // Admin API method 
  getAdminList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/newadmin/');
  }


  addAdmin(val:any) {
    return this.http.post(this.APIUrl + '/newadmin/', val);
  }


  updateAdmin(val:any) {
    return this.http.put(this.APIUrl + '/newadmin/', val);
  }


  deleteAdmin(val:any) {
    return this.http.delete(this.APIUrl + '/newadmin/' + val);
  }


  getAllAdmins():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/newadmin/');
  }




  // Products API method 
  getProductsList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/products/');
  }


  addNewProduct(val:any) {
    return this.http.post(this.APIUrl + '/products/', val);
  }


  updateProduct(val:any) {
    return this.http.put(this.APIUrl + '/products/', val);
  }


  deleteProduct(val:any) {
    return this.http.delete(this.APIUrl + '/products/' + val);
  }


  getAllProducts():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/products/');
  }




  // Orders API method 
  getOrdersList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/orders/');
  }


  createOrder(val:any) {
    return this.http.post(this.APIUrl + '/orders/', val);
  }


  updateOrder(val:any) {
    return this.http.put(this.APIUrl + '/orders/', val);
  }


  deleteOrder(val:any) {
    return this.http.delete(this.APIUrl + '/orders/' + val);
  }


  getAllOrders():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/orders/'); 
  }




  // Stores API method 
  getStoresList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/stores/');
  }


  createNewStore(val:any) {
    return this.http.post(this.APIUrl + '/stores/', val);
  }


  updateStore(val:any) {
    return this.http.put(this.APIUrl + '/stores/', val);
  }


  deleteStore(val:any) {
    return this.http.delete(this.APIUrl + '/stores/' + val);
  }


  getAllStores():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/stores/'); 
  }




  // Defective Goods API method 
  getDefectiveProductsList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/defective/');
  }


  addDefectiveProduct(val:any) {
    return this.http.post(this.APIUrl + '/defective/', val);
  }


  updateDefectiveProduct(val:any) {
    return this.http.put(this.APIUrl + '/defective/', val);
  }


  deleteDefectiveProduct(val:any) {
    return this.http.delete(this.APIUrl + '/defective/' + val);
  }


  getDefectiveProducts():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/defective/'); 
  }



}
