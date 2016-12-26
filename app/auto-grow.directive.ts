import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }

})

export class AutoGrowDirective {

    constructor(private elem: ElementRef, private renderer: Renderer){

    }

    onFocus(){
        this.renderer.setElementStyle(this.elem, 'width', '300');
    };

    onBlur(){
        this.renderer.setElementStyle(this.elem, 'width', '150');
    };

}