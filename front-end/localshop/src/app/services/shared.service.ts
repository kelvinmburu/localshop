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
    return this.http.post(APIUrl + '/newadmin/', { name, email, password }, httpOptions);
  }

  removeAdmin(item: any){
    return this.http.delete(APIUrl + '/newadmin/' + item);
  }






  // Clerk GET & POST service
  getClerks(): Observable<any> {
    return this.http.get(APIUrl + '/clerks/');
  }

  registerClerk( name: string, email: string, password: string): Observable<any> {
    return this.http.post(APIUrl + '/clerks/', { name, email, password }, httpOptions);
  }

  updateClerk(item:any){
    return this.http.put(APIUrl + '/clerks/<int:id>', item);
  }

  removeClerk(item: any){
    return this.http.delete(APIUrl + '/clerks/' + item);
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

  // updateProductList(
  //   product_name: string,
  //   category: string,
  //   quantity: number,
  //   status: string,
  //   buying_price: number,
  //   selling_price: number,
  //   expiry_date: Date,
  //   date_received: Date) {
  //     return this.http.put(APIUrl + '/products/', {
  //     product_name,
  //     category,
  //     quantity,
  //     status,
  //     buying_price,
  //     selling_price,
  //     expiry_date,
  //     date_received
  //     })
  //   }

    updateProduct(item:any){
      return this.http.put(APIUrl + '/products/<int:id>', item);
    }


    deleteProduct(item: any){
      return this.http.delete(APIUrl + '/products/' + item);
    } 

  // End of product API





  //Defectivegoods API method
  getDefectiveGoodsList(): Observable<any[]> {
    return this.http.get<any[]>(APIUrl + '/defective/');
  }


  addNewDefectiveGood( goodname:string, quantity:number, category:string) {
    return this.http.post(APIUrl + '/defective/', { goodname,quantity,category });
  }


  updateDefectiveGood(item:any){
    return this.http.put(APIUrl + '/defective/<int:id>', item);
  }


  deleteDefective(item: any){
    return this.http.delete(APIUrl + '/defective/' + item);
  }


}
