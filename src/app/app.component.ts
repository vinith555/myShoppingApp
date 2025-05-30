import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet,RouterLink,RouterModule } from '@angular/router';
import { ProductListService } from './product-list.service';



@Component({
  standalone:true,
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ProductListService]
})
export class AppComponent {
  title = 'My Shopping App'
}
