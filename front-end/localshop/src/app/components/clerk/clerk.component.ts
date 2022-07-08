import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-clerk',
  templateUrl: './clerk.component.html',
  styleUrls: ['./clerk.component.css'],
  providers: [SharedService]  
})
export class ClerkComponent implements OnInit {
  clerkDetails:any;
  form: any = {
    fullname: null,
    email: null,
    password: null 
  }; 

  errorMessage = ""

  constructor(private clerkService: SharedService) { }

  ngOnInit(): void {
    this.clerkService.getClerks().subscribe(data => {
      console.log(data)

      this.clerkDetails = data;
    });
  }

  onSubmit(f: NgForm){
    const { fullname, email, password } = this.form; 
    console.log(this.form)
    this.clerkService.registerClerk(fullname, email, password).subscribe(data => {
        console.log(data);
      }, err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);

      });
      f.reset();
    }
}
