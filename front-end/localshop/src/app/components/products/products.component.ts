import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [SharedService],
})
export class ProductsComponent implements OnInit {
  // Drop-down functionality
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

  productData: any;


  form: any = {
    product_name: null,
    category: null,
    quantity: null,
    status: null,
    buying_price: null,
    selling_price: null,
    expiry_date: null
  };
  errorMessage = '';

  // Modal
  closeResult: string | undefined;
  constructor( private productService: SharedService) { }

  ngOnInit(): void {
    this.productService.getProductsList().subscribe((data) => {
      console.log(data);

      this.productData = data;
    });
    // setTimeout(() => { this.ngOnInit(); }, 1000);
  }

  //Submit form data
  onSubmit(f : NgForm) {
    const { product_name,
      category,
      quantity,
      status,
      buying_price,
      selling_price,
      expiry_date,
    date_received } = this.form;
    console.log(this.form);
    this.productService.addNewProduct(product_name,
      category,
      quantity,
      status,
      buying_price,
      selling_price,
      expiry_date, date_received).subscribe(
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
