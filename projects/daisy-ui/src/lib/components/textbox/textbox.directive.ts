import {Directive, HostBinding, Input} from '@angular/core';

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
export class TextboxDirective {

	@Input() border: InputBorder = 'info';
	@Input() size: InputSize = 'md';

	private readonly borders = ['input-info','input-error','input-warning','input-primary','input-secondary','input-accent','input-ghost','input-bordered']
	private readonly sizes = ['input-md','input-lg','input-xs','input-sm']

	constructor() {
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
