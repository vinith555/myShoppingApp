import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  productList:{img:string,name:string,price:string,images:string[]}[] = [
    {img:'img1.avif',name:'Organized Clothes Rack',price:'₹1,200',images:['img1.avif','img1.1.jpeg','img1.2.jpeg','img1.3.jpeg','img1.4.jpeg']},
    // {img:'img2.avif',name:'Casual Outfit Flatlay',price:'₹2,499'},
    // {img:'img3.avif',name:'Hanging Clothes Display',price:'₹1,800'},
    // {img:'img4.avif',name:'Cozy Neutral Wardrobe',price:'₹1,999'},
    // {img:'img5.avif',name:'Minimalist Chair Setup',price:'₹1,299'},
    // {img:'img6.avif',name:'Stylish Accessories Flatlay',price:'₹1,499'},
    // {img:'img7.avif',name:'Bold Red Outfit',price:'₹2,999'},
    // {img:'img8.avif',name:'Stacked Denim Jeans',price:'₹1,699'},
    // {img:'img9.avif',name:'Modern Outfit Essentials',price:'₹2,799'},
    // {img:'img10.avif',name:'Trendy Sneakers Display',price:'₹2,499'}
  ]
  constructor(private route:ActivatedRoute,private renderer: Renderer2){}
  index!:number;
  productImg:string = '';
  currentElement!: HTMLElement;
  loadImage(value:string,reference:HTMLImageElement){
    this.productImg = value;
    if (this.currentElement) {
      this.renderer.setStyle(this.currentElement, 'border-color', '#697565'); 
    }
    this.renderer.setStyle(reference, 'border-color', 'black');
    this.currentElement = reference;
  }
  ngOnInit(): void {
      this.route.params.subscribe(
        (data:Params)=>{this.index = +data['id']; 
        if (this.index >= 0 && this.index < this.productList.length) {
          this.productImg = this.productList[this.index].images[0];
        } else {
          console.error('Invalid index');
        }}
      );
  }

}
