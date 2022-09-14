import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';
import {ValidationErrors} from "@angular/forms";
import {ErrorComponentTemplate} from "@daisy/core";

@Component({
	selector: 'default-control-error',
	templateUrl: './default-control-error.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultControlErrorComponent  {

	errorText: string | null = null;
	errorTemplate!: ErrorComponentTemplate | null;
	errorContext!: { $implicit: ValidationErrors; text: string };
	hideError = true;

	constructor(private cdr: ChangeDetectorRef) {}

	createTemplate(tpl: ErrorComponentTemplate, error: ValidationErrors, text: any) {
		this.errorTemplate = tpl;
		this.errorContext = { $implicit: error, text };
		this.cdr.markForCheck();
	}



	set text(value: string | null) {
		if (value !== this.errorText) {
			this.errorText = value;
			this.hideError = !value;
			this.cdr.markForCheck();
		}
	}


}
