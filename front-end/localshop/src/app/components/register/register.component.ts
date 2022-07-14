import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [SharedService]
})
export class RegisterComponent implements OnInit {

  is_superuser: any;
  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn: boolean = false;
  form: any;
  myGroup !: FormGroup;

  Roles: any = [
    { name: "Admin", value: 'admin' },
    { name: "Clerk", value: 'clerk' }
  ];


  handleError(error: any) {
    alert(error.error[Object.keys(error.error)[0]]);
    return throwError(error);
  }

  constructor(private registration: SharedService, private tokenStorage:SharedService) { }

  ngOnInit(): void {
    if (this.registration.getToken()) {
      this.isLoggedIn = true;
    }

    this.myGroup = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
      submit: new FormControl('Register'),
    })

    if (this.isLoggedIn) {
      this.myGroup.disable();
    }

  }


  changeClerk(value: any) {
    if (value.value == 'clerk') {
      this.is_superuser = true;
    } else {
      this.is_superuser = false;
    }
  }

  onSubmit(credentials: any): void {


    this.registration.createUser(credentials.username, credentials.email, credentials.password, this.is_superuser).pipe(catchError(this.handleError)).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        if (data.is_superuser == false) {
          this.registration.createCustomer(data.id).pipe(catchError(this.handleError)).subscribe(
            ids => {
              console.log(ids);
            })
        } else {
          this.registration.createCaterer(data.id).pipe(catchError(this.handleError)).subscribe(
            ids => {
              console.log(ids);
            })
        }
        window.location.href = '/login';
      }
    )

  }

}
