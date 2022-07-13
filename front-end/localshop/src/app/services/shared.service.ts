import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; //Handle asynchronous requests and responses

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private APIUrl = 'https://localshopinventory.herokuapp.com';
  constructor(private http: HttpClient) { }


  // Authentication service
  login(username: string, password: string){
    return this.http.post<any>(APIUrl + '/api/auth/', {username, password}, httpOptions).pipe(
      map(user => {
        if (user && user.token){
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
      })
    );
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  // Admin GET & POST service
  getAdmin(): Observable<any> {
    return this.http.get(this.APIUrl + '/newadmin/');
  }

  addAdmin(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.APIUrl + '/newadmin/',
      { name, email, password },
      httpOptions
    );
  }

  // Clerk GET & POST service
  getClerks(): Observable<any> {
    return this.http.get(this.APIUrl + '/clerks/');
  }

  registerClerk(
    name: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      this.APIUrl + '/clerks/',
      { name, email, password },
      httpOptions
    );
  }

  // Product GET & POST service
  getProductsList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/products/');
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
    return this.http.post(this.APIUrl + '/products/', {
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
      return this.http.put(this.APIUrl + '/products/<int:id>', {
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
    return this.http.get<any[]>(this.APIUrl + '/defective/');
  }
  //  name, quantity, category
  addNewDefectiveGood(
    goodname:string, quantity:number, category:string
  ) {
    return this.http.post(this.APIUrl + '/defective/', {
      goodname,quantity,category
    });
  }

  getRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/requests/');
  }
  //  name, quantity, category
  addNewRequest(
    ordered_product:string, quantity:number, category:string
  ) {
    return this.http.post(this.APIUrl + '/requests/', {
      ordered_product,quantity,category
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

 // authentication

}
