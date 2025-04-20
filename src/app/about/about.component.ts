import { Component } from '@angular/core';
import { BottomdetailComponent } from '../bottomdetail/bottomdetail.component';
import { TopbarComponent } from '../topbar/topbar.component';


@Component({
    standalone:true,
    selector: 'app-about',
    imports: [BottomdetailComponent, TopbarComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {

}
