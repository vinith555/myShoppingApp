import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PurchaselistService } from '../../app/purchaselist.service';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  constructor(private route:Router,private active:ActivatedRoute,private purchase:PurchaselistService){}
  navigateShipping(){
    //  this.route.navigate(['shipping'],{relativeTo:this.active});
  }
  onSubmit(f:NgForm){
    console.log(f);
  }
}
