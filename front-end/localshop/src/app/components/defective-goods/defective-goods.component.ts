import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

import {Defectivegoods} from './defective';

@Component({
  selector: 'app-defective-goods',
  templateUrl: './defective-goods.component.html',
  styleUrls: ['./defective-goods.component.css'],
  providers: [SharedService]
})
export class DefectiveGoodsComponent implements OnInit {
// name.q,cat
  
  categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Foods" },
    { id: 3, name: "Detergents" },
    { id: 4, name: "Kitchen-Ware" },
    { id: 5, name: "Toys" }
  ];

  defectiveGoodsData:any

  form: any = {
    goodname: null, 
    quantity:null,
    category:null

  };
  errorMessage = '';

  constructor(private defectiveService: SharedService) { }


  ngOnInit(): void {
    this.defectiveService.getDefectiveGoodsList().subscribe((data) => {
      console.log(data);
      this.defectiveGoodsData= data;
    });
    // setTimeout(() => { this.ngOnInit(); }, 1000);
  }

 



  onSubmit(f: NgForm){
    const {
      goodname,
      quantity,
      category
    } = this.form;
    console.log(this.form)
    this.defectiveService.addNewDefectiveGood(
      goodname,
      quantity,
      category
    ).subscribe(
      (data)=>{
      console.log(data);
      },(err) => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage)
      }
    );
    f.reset()
  }
}
