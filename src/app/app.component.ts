import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  constructor(private route:Router){}

  navigateToAbout(){
    this.route.navigate(['/about']);
  }
  navigateHome(){
    this.route.navigate(['']);
  }
}
