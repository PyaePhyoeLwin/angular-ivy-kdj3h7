import { Directive, ElementRef, HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})

export class HighlightDirective {
  @HostBinding('style.background-color')
  public backgroundColor: string = this.getRandomBackgroundColor();

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.backgroundColor = this.getRandomBackgroundColor();
  }
  private getRandomBackgroundColor(): string {
    return `rgb(${ this.getRandomColorScale() }, ${ this.getRandomColorScale() }, ${ this.getRandomColorScale() })`;
  }

  private getRandomColorScale(): number {
    return Math.round( Math.random() * 255 );
  }
}



// export class HighlightDirective {
//   constructor(private el: ElementRef) {}

//   @HostListener('mouseenter') onMouseEnter() {
//     this.highlight(Math.random() * 255 );
//   }

//   // @HostListener('mouseleave') onMouseLeave() {
//   //   this.highlight();
//   // }

//   private highlight(color: number) {
//     this.el.nativeElement.style.backgroundColor = color;
//   }
// }
