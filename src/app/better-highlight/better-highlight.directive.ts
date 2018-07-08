import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = {'bgColor': 'transparent', 'color': 'black'};
  @Input() highlightColor = {'bgColor': 'blue', 'color': 'white'};
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string;

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor.bgColor;
    this.textColor = this.defaultColor.color;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = this.highlightColor.bgColor;
    this.textColor = this.highlightColor.color;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = this.defaultColor.bgColor;
    this.textColor = this.defaultColor.color;
  }

}
