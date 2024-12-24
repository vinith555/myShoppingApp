import { Component, Input } from '@angular/core';
import { BgcolorDirective } from '../bgcolor.directive';

@Component({
  selector: 'app-bottomdetail',
  standalone: true,
  imports: [BgcolorDirective],
  templateUrl: './bottomdetail.component.html',
  styleUrl: './bottomdetail.component.css'
})
export class BottomdetailComponent {
@Input()color!:string;
goToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
