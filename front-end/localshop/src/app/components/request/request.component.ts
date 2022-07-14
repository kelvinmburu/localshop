import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Foods" },
    { id: 3, name: "Detergents" },
    { id: 4, name: "Kitchen-Ware" },
    { id: 5, name: "Toys" }
  ];
  status = [
    { id: 1, name: "Paid" },
    { id: 2, name: "Not Paid" }
  ]

  data: any;


  form: any = {
    ordered_product: null,
    category: null,
    quantity: null,

  };
  errorMessage = '';

  // Modal
  // closeResult: string | undefined;
  constructor( private productService: SharedService) { }

  ngOnInit(): void {
    this.productService.getRequests().subscribe((data) => {
      console.log(data);

      this.data = data;
    });
    // setTimeout(() => { this.ngOnInit(); }, 1000);
  }

  //Submit form data
  onSubmit(f : NgForm) {
    const { ordered_product,
      category,
      quantity,
      
    date_received } = this.form;
    console.log(this.form);
    this.productService.addNewRequest(ordered_product,
      category,
      quantity,
      ).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          this.errorMessage = err.error.message;
          console.log(this.errorMessage);
        }
      );
    f.reset()
  }
}