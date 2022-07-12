import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; //Handle asynchronous requests and responses
const APIUrl = 'http://127.0.0.1:8000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) { }

  // Admin GET & POST service
  getAdmin(): Observable<any> {
    return this.http.get(APIUrl + '/newadmin/');
  }

  addAdmin(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      APIUrl + '/newadmin/',
      { name, email, password },
      httpOptions
    );
  }

  // Clerk GET & POST service
  getClerks(): Observable<any> {
    return this.http.get(APIUrl + '/clerks/');
  }

  registerClerk(
    name: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      APIUrl + '/clerks/',
      { name, email, password },
      httpOptions
    );
  }

  // Product GET & POST service
  getProductsList(): Observable<any[]> {
    return this.http.get<any[]>(APIUrl + '/products/');
  }

  addNewProduct(
    product_name: string,
    category: string,
    quantity: number,
    status: string,
    buying_price: number,
    selling_price: number,
    expiry_date: Date,
    date_received: Date
  ) {
    return this.http.post(APIUrl + '/products/', {
      product_name,
      category,
      quantity,
      status,
      buying_price,
      selling_price,
      expiry_date,
      date_received
    });
  }

  updateProductList(product_name: string,
    category: string,
    quantity: number,
    status: string,
    buying_price: number,
    selling_price: number,
    expiry_date: Date,
    date_received: Date) {
      return this.http.put(APIUrl + '/products/<int:id>', {
      product_name,
      category,
      quantity,
      status,
      buying_price,
      selling_price,
      expiry_date,
      date_received
      })
    }



  // End of product API
  //Defectivegoods API method
  getDefectiveGoodsList(): Observable<any[]> {
    return this.http.get<any[]>(APIUrl + '/defective/');
  }
  //  name, quantity, category
  addNewDefectiveGood(
    good_name: string, quantity: number, category: string
  ) {
    return this.http.post(APIUrl + '/defective/', {
      good_name, quantity, category
    });
  }

  // createOrder(val:any) {
  //   return this.http.post(this.APIUrl + '/orders/', val);
  // }

  // updateOrder(val:any) {
  //   return this.http.put(this.APIUrl + '/orders/', val);
  // }

  // deleteOrder(val:any) {
  //   return this.http.delete(this.APIUrl + '/orders/' + val);
  // }

  // getAllOrders():Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl + '/orders/');
  // }











  // // Login API method
  // loginUser(val:any) {
  //   return this.http.post(this.APIUrl + '/login/', val);
  // }

  // // Admin API method
  // getAdminList(): Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl + '/newadmin/');
  // }

  // updateAdmin(val:any) {
  //   return this.http.put(this.APIUrl + '/newadmin/', val);
  // }

  // deleteAdmin(val:any) {
  //   return this.http.delete(this.APIUrl + '/newadmin/' + val);
  // }

  // getAllAdmins():Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl + '/newadmin/');
  // }

  // updateProduct(val:any) {
  //   return this.http.put(this.APIUrl + '/products/', val);
  // }

  // deleteProduct(val:any) {
  //   return this.http.delete(this.APIUrl + '/products/' + val);
  // }

  // getAllProducts():Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl + '/products/');
  // }


  // // Stores API method
  // getStoresList(): Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl + '/stores/');
  // }

  // createNewStore(val:any) {
  //   return this.http.post(this.APIUrl + '/stores/', val);
  // }

  // updateStore(val:any) {
  //   return this.http.put(this.APIUrl + '/stores/', val);
  // }

  // deleteStore(val:any) {
  //   return this.http.delete(this.APIUrl + '/stores/' + val);
  // }

  // getAllStores():Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl + '/stores/');
  // }

  // // Defective Goods API method
  // getDefectiveProductsList(): Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl + '/defective/');
  // }

  // addDefectiveProduct(val:any) {
  //   return this.http.post(this.APIUrl + '/defective/', val);
  // }

  // updateDefectiveProduct(val:any) {
  //   return this.http.put(this.APIUrl + '/defective/', val);
  // }

  // deleteDefectiveProduct(val:any) {
  //   return this.http.delete(this.APIUrl + '/defective/' + val);
  // }

  // getDefectiveProducts():Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl + '/defective/');
  // }
}
