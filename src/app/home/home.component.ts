import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route:Router,private activeRoute:ActivatedRoute){}
productList:{img:string,name:string,price:number}[] = [
  {img:'img1.avif',name:'Organized Clothes Rack',price:1200},
  {img:'img2.avif',name:'Casual Outfit Flatlay',price:2499},
  {img:'img3.avif',name:'Hanging Clothes Display',price:1800},
  {img:'img4.avif',name:'Cozy Neutral Wardrobe',price:1999},
  {img:'img5.avif',name:'Minimalist Chair Setup',price:1299},
  {img:'img6.avif',name:'Stylish Accessories Flatlay',price:1499},
  {img:'img7.avif',name:'Bold Red Outfit',price:2999},
  {img:'img8.avif',name:'Stacked Denim Jeans',price:1699},
  {img:'img9.avif',name:'Modern Outfit Essentials',price:2799},
  {img:'img10.avif',name:'Trendy Sneakers Display',price:2499}
]
navigateProduct(name:string,value:number){
  this.route.navigate(['product',name,value]);
  console.log(value);
}
}
