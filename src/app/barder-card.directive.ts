import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BarderCardDirective {

  private initialColor: string = '#f5F5F5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor( private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
   }

   @Input('pkmBorderCard') borderColor: string;

   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
   }


  private setBorder(color : string) {
    let border = `solid 4px ${color}`;
    this.el.nativeElement.style.border = border;
  }
  
  private setHeight(height:number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  
  
}
