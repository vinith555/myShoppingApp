import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { BottomdetailComponent } from '../bottomdetail/bottomdetail.component';
import { BgcolorDirective } from '../bgcolor.directive';
import { TopbarComponent } from '../topbar/topbar.component';


@Component({
  standalone:true,
    selector: 'app-home',
    imports: [CommonModule, BottomdetailComponent, TopbarComponent],
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
  window.scrollTo({top:0})
}
}
