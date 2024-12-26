import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaselistService {
  private address = new BehaviorSubject<{}>([]);
  purchaseAddress = this.address.asObservable();
  addAddress(add:{}){
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
