import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() searchtext: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.highlight(this.searchtext);
  }

  private highlight(searchtext: string) {
    const element = this.el.nativeElement;
    // this.applyHighlighting(element,searchtext);
    if (element.children.length > 0) {
      Array.from(element.children).forEach((child: any) => {
        this.applyHighlighting(child, searchtext);
      });
    } else {
      this.applyHighlighting(element, searchtext);
    }
  }

  private applyHighlighting(element: HTMLElement, searchtext: string) {
    const text = element.textContent || '';
    
    if (!searchtext) {
      return;
    }
    
    const regex = new RegExp(`(${searchtext})`, 'gi');
    const newText = text.replace(regex, `<span style="background-color: #e5f674; color:black">$1</span>`);
    // console.log("New Text",newText);
    element.innerHTML = newText;
  }
}
