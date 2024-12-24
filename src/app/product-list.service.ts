import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private cartItemsSource = new BehaviorSubject<{img:string,name:string,price:number,size:string,quantity:number}[]>([]);
  cartItems = this.cartItemsSource.asObservable();
  
  addCartItems(item:{img:string,name:string,price:number,size:string,quantity:number}){
    const currentCart = this.cartItemsSource.value;
    const index = currentCart.findIndex(cartItem => cartItem.name === item.name && cartItem.size === item.size);
    if (index === -1) {
    currentCart.push(item);
    } else {
    currentCart[index].quantity += item.quantity;
    }
    this.cartItemsSource.next(currentCart);
    }
    constructor() { }
    productList:{img:string,name:string,price:number,images:string[]}[] = [
      {img:'img1.jpg',name:'Classic maroon t-shirt',price:1200,images:['img1.jpg','img1.1.jpg','img1.2.jpg','img1.3.jpg']},
      {img:'img2.jpg',name:'Trendy gray hoodie',price:1800,images:['img2.jpg','img2.1.jpg','img2.2.jpg']},
      {img:'img3.jpg',name:'Modern stylish sneakers',price:1999,images:['img3.jpg','img3.1.jpg','img3.4.jpg','img3.3.jpg']},
      {img:'img4.jpg',name:'Checkered green shirt',price:1299,images:['img4.jpg','img4.1.jpg','img4.2.jpg','img4.3.jpg']},
      {img:'img5.jpg',name:'Classic gray jeans',price:1499,images:['img5.jpg','img5.1.jpg','img5.2.jpg','img5.3.jpg','img5.4.jpg']},
      {img:'img6.jpg',name:'Maroon casual shirt',price:2999,images:['img6.jpg','img6.1.jpg','img6.2.jpg','img6.3.jpg','img6.4.jpg']},
      {img:'img7.jpg',name:'Distressed blue jeans',price:1699,images:['img7.jpg','img7.1.jpg','img7.2.jpg','img7.3.jpg','img7.4.jpg']},
    ];
    getProductList(){
      return this.productList;
    }
    getOneProduct(index:number){
      return this.productList[index];
    }
}
