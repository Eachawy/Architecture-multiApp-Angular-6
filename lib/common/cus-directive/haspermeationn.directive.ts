import { 
    Directive, 
    Input, 
    ElementRef,
    TemplateRef,
    ViewContainerRef
 } from "@angular/core";

import { loginService } from '../../user-context/login.service';

@Directive({
    selector:'[permeationCode]'
})

export class haspermeationDirective {
    constructor( 
        private el: ElementRef,
        private loginservice: loginService,
        private templateRef: TemplateRef<any>,
        private viewContainerRef : ViewContainerRef
    ){

    }

    private Code: string[];

    @Input()

    set permeationCode(value: string | string[]) {
        this.Code = typeof value === 'string' ? [value] : value;
        this.permeationViewContent(this.Code)
    }

    permeationViewContent = (value) => {
        //this.el.nativeElement.remove();
        !this.loginservice.hasPermission(value) ? this.viewContainerRef.clear() : this.viewContainerRef.createEmbeddedView(this.templateRef);
    }

}