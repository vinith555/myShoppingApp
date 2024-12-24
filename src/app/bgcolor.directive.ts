import { Directive, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBgcolor]',
  standalone: true
})
export class BgcolorDirective implements OnInit{
  @Input()bgIn!:string;
  constructor() { }
  @HostBinding('style.backgroundColor')bg:string = 'black';
  ngOnInit(): void {
      this.bg = this.bgIn;
  }
}
