import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { BottomdetailComponent } from '../bottomdetail/bottomdetail.component';
import { BgcolorDirective } from '../bgcolor.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,BottomdetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private route:Router,private activeRoute:ActivatedRoute , private product:ProductListService){
    
  }
productList:{img:string,name:string,price:number,images:string[]}[] = [];

ngOnInit(): void {
    this.productList = this.product.getProductList();
    // console.log(this.productList);
}

navigateProduct(name:string,value:number){
  this.route.navigate(['product',name,value]);
}
}
