import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaselistService {
  private address = new BehaviorSubject<{email:string,newsletter:boolean, country:string,firstName:string,lastName:string,address:string,addAddress:string,city:string,state:string,pincode:string,phno:string}>({
    email: '',
    newsletter: false,
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    addAddress: '',
    city: '',
    state: '',
    pincode: '',
    phno: ''
  });
  purchaseAddress = this.address.asObservable();
  addAddress(add:{email:string,newsletter:boolean, country:string,firstName:string,lastName:string,address:string,addAddress:string,city:string,state:string,pincode:string,phno:string}){
    this.address.next(add);
  }
  private purchaseList:{img:string,name:string,price:number,size:string,quantity:number}[] = [];
  updatePurchaseList(items:{img:string,name:string,price:number,size:string,quantity:number}[]){
    this.purchaseList = items;
  }
  getPurchaseList(){
    return this.purchaseList;
  }
  constructor() { }
}
