import {Component, HostBinding, Input} from '@angular/core';

@Component({
	selector: 'form-control',
	templateUrl: './form-control.component.html'
})
export class FormControlComponent {


	@Input() label!: string;
	@Input() labelAlt!: string;

	@HostBinding('class')
	get classList(): string {
		return [
			'form-control'
		].join(' ');
	}

}

