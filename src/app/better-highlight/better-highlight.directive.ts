import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transaparent';
  @HostBinding('style.color') textColor = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = 'blue';
    this.textColor = 'white';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = 'transparent';
    this.textColor = 'black';
  }

}
