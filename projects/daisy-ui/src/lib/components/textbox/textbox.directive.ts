import {
	ComponentFactoryResolver,
	ComponentRef,
	Directive,
	ElementRef, EmbeddedViewRef,
	HostBinding,
	Inject,
	Input,
	OnInit,
	Optional,
	Self, ViewContainerRef
} from '@angular/core';
import {NgControl} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {VALIDATION_ERRORS} from "../../injectionTokens";
import {DefaultControlErrorComponent} from "../control-error/default-control-error/default-control-error.component";

type InputBorder =
	'info'
	| 'error'
	| 'warning'
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'ghost'
	| 'bordered'

type InputSize = 'lg' | 'sm' | 'xs' | 'md'

@Directive({
	selector: 'input[du-textbox]'
})
export class TextboxDirective implements OnInit {

	@Input() border: InputBorder = 'info';
	@Input() size: InputSize = 'md';


	private readonly borders = ['input-info', 'input-error', 'input-warning', 'input-primary', 'input-secondary', 'input-accent', 'input-ghost', 'input-bordered']
	private readonly sizes = ['input-md', 'input-lg', 'input-xs', 'input-sm']


	constructor() {
	}

	ngOnInit() {

	}

	@HostBinding('class')
	get classList(): string {

		return [
			'input',
			this.border ? `input-${this.border}` : ``,
			this.size ? `input-${this.size}` : ``,
		].join(' ');
	}





}
