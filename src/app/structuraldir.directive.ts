import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuraldir]'
})
export class StructuraldirDirective {

  constructor(private tempRef:TemplateRef<any>, private viewContRef: ViewContainerRef) { }

    @Input() set appStructuraldir(condition: any) {
      if (condition) {
        this.viewContRef.createEmbeddedView(this.tempRef);
      } else {
        this.viewContRef.clear();
      }
    }     

}
