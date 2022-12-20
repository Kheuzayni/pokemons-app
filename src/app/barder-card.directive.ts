import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmnBarderCard]'
})
export class BarderCardDirective {

  constructor( private el:ElementRef) {
    this.setHeight(180);
    this.setBorder(`#f5F5F5`);
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(`#009688`);
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(`#f5F5F5`);
   }


  private setBorder(color : string) {
    let border = `solid 4px ${color}`;
    this.el.nativeElement.style.border = border;
  }
  
  private setHeight(height:number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  
  
}
