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
    {img:'img1.jpg',name:'Classic maroon t-shirt',price:'₹1,200',images:['img1.jpg','img1.1.jpg','img1.2.jpg','img1.3.jpg']},
    {img:'img2.jpg',name:'Trendy gray hoodie',price:'₹1,800',images:['img2.jpg','img2.1.jpg','img2.2.jpg']},
    {img:'img3.jpg',name:'Modern stylish sneakers',price:'₹1,999',images:['img3.jpg','img3.1.jpg','img3.4.jpg','img3.3.jpg']},
    {img:'img4.jpg',name:'Checkered green shirt',price:'₹1,299',images:['img4.jpg','img4.1.jpg','img4.2.jpg','img4.3.jpg']},
    {img:'img5.jpg',name:'Classic gray jeans',price:'₹1,499',images:['img5.jpg','img5.1.jpg','img5.2.jpg','img5.3.jpg','img5.4.jpg']},
    {img:'img6.jpg',name:'Maroon casual shirt',price:'₹2,999',images:['img6.jpg','img6.1.jpg','img6.2.jpg','img6.3.jpg','img6.4.jpg']},
    {img:'img7.jpg',name:'Distressed blue jeans',price:'₹1,699',images:['img7.jpg','img7.1.jpg','img7.2.jpg','img7.3.jpg','img7.4.jpg']},
    // {img:'img9.avif',name:'Modern Outfit Essentials',price:'₹2,799'},
    // {img:'img10.avif',name:'Trendy Sneakers Display',price:'₹2,499'}
  ]
  
  sizeList:string[]=['S','M','L','XL','2XL'];
  sizeValue:string='';

  count:number = 0;
  increment(){this.count++;}
  decrement(){
    if(this.count>0){
      this.count--
    }
  }
  constructor(private route:ActivatedRoute,private renderer: Renderer2){}
  index!:number;
  productImg:string = '';
  currentElement!: HTMLElement;
  currentElement1!:HTMLElement;
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
  
  setSize(value:string,reference:HTMLButtonElement){
    this.sizeValue = value;
    if(this.currentElement1){
      this.renderer.setStyle(this.currentElement1,'background','white');
      this.currentElement1.style.color = 'black';
    }
    this.renderer.setStyle(reference,'background','black');
    reference.style.color = 'white';

    this.currentElement1 = reference;
  }

  addingToCart(index:number){
    console.log(this.count);
    console.log(this.sizeValue);
    console.log(index);
  }

}
