import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlErrorDirective} from "./control-error.directive";
import {DefaultControlErrorComponent} from "./default-control-error/default-control-error.component";


@NgModule({
	declarations: [
		ControlErrorDirective,
		DefaultControlErrorComponent
	],
	exports: [
		ControlErrorDirective,
		DefaultControlErrorComponent
	],
	imports: [
		CommonModule
	]
})
export class ControlErrorModule {
}
