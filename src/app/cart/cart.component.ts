import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  noOfItems:number = 1;
  cartItems:{img:string,name:string,price:number}[] = [
    {img:'img1.jpg',name:'Classic maroon t-shirt',price:1200},
    {img:'img2.jpg',name:'Trendy gray hoodie',price:2499},
    {img:'img3.jpg',name:'Modern stylish sneakers',price:1800},
    {img:'img4.jpg',name:'Checkered green shirt',price:1999},
    {img:'img5.jpg',name:'Classic gray jeans',price:1299},
    {img:'img6.jpg',name:'Maroon casual shirt',price:1499},
    {img:'img7.jpg',name:'Distressed blue jeans',price:2999},]
    constructor(){}
}
