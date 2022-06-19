import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor( private el:ElementRef,
    private renderer:Renderer2) {}

    ngOnInit(){
      this.renderer.setStyle(this.el.nativeElement,'background-color','blue'); 
      this.renderer.setStyle(this.el.nativeElement,'height','100px'); 
      this.renderer.setStyle(this.el.nativeElement,'width','30%');
      this.renderer.setStyle(this.el.nativeElement,'box-shadow','5px 10px #888888'); 
      this.renderer.setStyle(this.el.nativeElement,'border','2px solid black');
      this.renderer.setStyle(this.el.nativeElement,'text-align','center'); 



    }

    //PREVIOUS PROPERTIES ARE ALREADY ADDED
    @HostListener ('mouseover')
    onMouseOver(){
      this.renderer.setStyle(this.el.nativeElement,'zoom','200%'); 
    }

    @HostListener('mouseleave')
    onMouseLeave(){
      this.renderer.setStyle(this.el.nativeElement,'zoom','100%'); 
      this.renderer.setStyle(this.el.nativeElement,'background-color','blue');
      this.renderer.setStyle(this.el.nativeElement,'box-shadow','5px 10px #888888'); 
      this.renderer.setStyle(this.el.nativeElement,'border','2px solid black');
      this.renderer.setStyle(this.el.nativeElement,'text-align','center'); 
    }


}
