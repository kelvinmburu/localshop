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


  getAdminList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/newadmin/');
  }

  addAdmin(val: any) {
    return this.http.post(this.APIUrl + '/newadmin/', val);
  }

  updateAdmin(val: any) {
    return this.http.put(this.APIUrl + '/newadmin/', val);
  }

  deleteAdmin(val: any) {
    return this.http.delete(this.APIUrl + '/newadmin/', val);
  }
  getAllAdmin():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/newadmin/')
  }


}
