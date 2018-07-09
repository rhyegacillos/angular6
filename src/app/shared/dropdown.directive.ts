import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private dropdownParentEl = this.elementRef.nativeElement.closest('.dropdown');
  private isOpen: boolean;
  constructor(private elementRef: ElementRef) { }

//  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.dropdownParentEl.classList.add('show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.add('show');
    } else {
      this.dropdownParentEl.classList.remove('show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.remove('show');
    }
  }
}
