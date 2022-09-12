import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormControl} from "@daisy/core";


@Component({
	selector: 'form-control',
	templateUrl: './form-control.component.html'
})
export class FormControlComponent implements FormControl {


	@Input() labelText!: string;
	@Input() labelAltText!: string;

	@HostBinding('class')
	get classList(): string {
		return [
			'form-control'
		].join(' ');
	}

	constructor() {
	}

}

