import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [SharedService] 
})
export class AddUserComponent implements OnInit {
  adminData:any;
  form: any = {
    username: null,
    email: null,
    password: null
  }; 

  errorMessage = ""

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.service.getAdmin().subscribe(data => {
      console.log(data)

      this.adminData = data;
    });
  }

  // addNewAdmin(){
  //   this.service.addAdmin(this.newAdmin).subscribe(
  //     response => {
  //       alert("Admin " + this.newAdmin.username + " added successfully"); 
  //     } 
  //     // error => console.log('error', error)
  //   );
  // }


  onSubmit(){
    const { username, email, password } = this.form; 
    console.log(this.form)
    this.service.addAdmin(username, email, password).subscribe(data => {
        console.log(data);
      }, err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);

      }
      )

      // window.location.href = '/newadmin';

    }

  
}