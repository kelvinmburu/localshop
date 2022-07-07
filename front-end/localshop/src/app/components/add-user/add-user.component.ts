import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [SharedService] 
})
export class AddUserComponent implements OnInit {
  newAdmin:any;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    // this.newAdmin = {
    //   username: '',
    //   email: '',
    //   password: '',
    // };
  }

  // addNewAdmin(){
  //   this.service.addAdmin(this.newAdmin).subscribe(
  //     response => {
  //       alert("Admin " + this.newAdmin.username + " added successfully"); 
  //     } 
  //     // error => console.log('error', error)
  //   );
  // }


  addAdmin(credentials: any){
    this.service.addAdmin(credentials.name, credentials.email, credentials.password).subscribe((data: any) => {
        console.log(data);
      })

      window.location.href = '/newadmin';

    }

  
}