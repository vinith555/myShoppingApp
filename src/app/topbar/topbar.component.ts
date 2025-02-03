import { Component ,HostListener} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  isMobile: boolean = window.innerWidth > 768;
  isSidebarOpen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth > 768;}
}
