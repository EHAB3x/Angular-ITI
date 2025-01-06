import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true
})
export class HighlightCardDirective {

  @Input() externalColor: string = 'black';
  @Input('appHighlightCard') defaultColor: string = 'gray';

  constructor(private ele:ElementRef) {
    ele.nativeElement.style.backgroundColor = this.defaultColor;
   }

   @HostListener('mouseover') over(){
    this.ele.nativeElement.style.backgroundColor = this.externalColor;
   }

   @HostListener('mouseout') out(){
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
   }
}
