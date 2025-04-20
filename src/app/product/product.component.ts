import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { BottomdetailComponent } from '../bottomdetail/bottomdetail.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
    standalone:true,
    selector: 'app-product',
    imports: [CommonModule, BottomdetailComponent, TopbarComponent],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  productList:{img:string,name:string,price:number,images:string[]}[] = [];
  
  sizeList:string[]=['S','M','L','XL','2XL'];
  sizeValue:string='';

  count:number = 1 ;
  increment(){this.count++;}
  decrement(){
    if(this.count>1){
      this.count--
    }
  }
  constructor(private activeRoute:ActivatedRoute,private renderer: Renderer2,private product:ProductListService,private route:Router){}
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
      this.productList = this.product.getProductList();
      this.activeRoute.params.subscribe(
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

  addingToCart(ind:number){
    const item = {
      img:this.productList[ind].img,
      name:this.productList[ind].name,
      price:this.productList[ind].price,
      size:this.sizeValue,
      quantity:this.count,
    };
    this.product.addCartItems(item);
    this.route.navigate(["cart"]);
  }

}
