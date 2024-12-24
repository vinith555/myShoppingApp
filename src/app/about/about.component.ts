import { Component } from '@angular/core';
import { BottomdetailComponent } from '../bottomdetail/bottomdetail.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BottomdetailComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
