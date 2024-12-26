import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PurchaselistService } from '../../app/purchaselist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit,OnDestroy{
  private sub = new Subscription();
  ShippingDetail = {
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
constructor(private purchase:PurchaselistService){}
ngOnInit(): void {

  this.sub.add(this.purchase.purchaseAddress.subscribe((data)=>{
    this.ShippingDetail = data;
  }));  
}
ngOnDestroy(): void {
    this.sub.unsubscribe();
}

}
