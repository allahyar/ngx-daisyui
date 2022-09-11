import {ElementRef} from "@angular/core";

export interface IDialogParams {
	title: string;
	body: string;
	data: any;
	context?: HTMLElement;
}
