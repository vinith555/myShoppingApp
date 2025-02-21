import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PurchaselistService } from '../../app/purchaselist.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent{
  constructor(private route:Router,private active:ActivatedRoute,private purchase:PurchaselistService){}
  formData = {
    email: '',
    newsletter: false,
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    addAddress:'',
    city:'',
    state:'',
    pincode:'',
    phno:''
  };
  navigateShipping(){
     this.route.navigate(['shipping'],{relativeTo:this.active});
  }
  onSubmit(f:NgForm,event:Event){
    console.log(f.valid);
    this.purchase.addAddress(this.formData);
    this.navigateShipping();
  }
}
