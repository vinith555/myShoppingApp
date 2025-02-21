import { Component,HostListener,Input } from '@angular/core';
import { BgcolorDirective } from '../bgcolor.directive';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bottomdetail',
  standalone: true,
  imports: [BgcolorDirective,CommonModule],
  templateUrl: './bottomdetail.component.html',
  styleUrl: './bottomdetail.component.css'
})
export class BottomdetailComponent {
@Input()color!:string;
goToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
isMobile: boolean = window.innerWidth <   1000;
@HostListener('window:resize',['$event'])onresize(){
  this.isMobile = window.innerWidth < 1000;
}
}
