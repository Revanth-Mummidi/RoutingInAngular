import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() set searchtext(e: any) {
    console.log("Change", e);

    this.highlight(e);
  };

  constructor(private el: ElementRef, private renderer: Renderer2) { };


  private highlight(searchtext: string) {
    const element = this.el.nativeElement;
    console.log("Paragraph", element);
    // this.getElementsWithTextContent(element);
    const arr= this.getElementsWithTextContent(element);
    if (arr.length > 0) {
     arr.map((child: any) => {

        this.applyHighlighting(child, searchtext);
      });
    } else {
      this.applyHighlighting(element, searchtext);
    }
  }

  private getElementsWithTextContent(element: HTMLElement): HTMLElement[] | any {
    let textElements: HTMLElement[] = [];
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      if (child.textContent && child.textContent.trim().length > 0) {
        textElements.push(child);        
      }
      textElements = textElements.concat(
        this.getElementsWithTextContent(child)
      );
    }
    return textElements;
  }


  private applyHighlighting(element: HTMLElement, searchtext: string) {
    const text = element.textContent || '';

    if (!searchtext) {
      this.removeHighlighting();
      return;
    }

    const regex = new RegExp(`(${searchtext})`, 'gi');
    const newText = text.replace(regex, `<span style="background-color: #e5f674; color:black">$1</span>`);
    console.log("OUTs", newText);
    element.innerHTML = newText;
  }

  private removeHighlighting() {
    const element = this.el.nativeElement;
    const spanRegex = /<span style="background-color: #e5f674; color:black">(.*?)<\/span>/gi;
    if (spanRegex.test(element.innerHTML)) {

      const originalText = element.innerHTML.replace(spanRegex, '$1');

      element.innerHTML = originalText;
   
    }
    else return;

  }

}
