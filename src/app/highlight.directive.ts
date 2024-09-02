import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 
  searchTxt:string='';
  @Input() set searchtext(e: any) {
    console.log("Change", e);
    this.searchTxt=e;
    this.removeHighlighting();
    this.highlight(e);
  };

  constructor(private el: ElementRef, private renderer: Renderer2) { };


  private highlight (searchtext: string) {
  
    const element = this.el.nativeElement;
     this.findChildren(element,searchtext);
  }

  private findChildren(element : HTMLElement,searchTxt:string):void{
    // console.log("FIND",element,searchTxt);
    // console.log("CHILD",element,element.children,element.children.length);
    if(element.children.length>0)
    {
    Array.from(element.children).forEach((child) => {
        //  console.log("CHILDREN",child);
            this.findChildren(child as HTMLElement,searchTxt);
         
         
    });
   
  }
  else{
    // console.log("ROOT",element,searchTxt);
    this.applyHighlighting(element,searchTxt);
    // this.removeHighlighting();
  }
  }


  private applyHighlighting(element: HTMLElement, searchtext: string) {
    
    const text = element.textContent || '';
    
    if (!searchtext) {
      this.removeHighlighting();
      return;
    }
   
    console.log("Search=",searchtext,text)
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
