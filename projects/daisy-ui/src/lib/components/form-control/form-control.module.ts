import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControlComponent} from "./form-control.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
	declarations: [FormControlComponent],
	exports: [
		FormControlComponent,
		ReactiveFormsModule,
		FormsModule
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule
	]
})
export class FormControlModule {
}
