import {ModuleWithProviders, NgModule} from '@angular/core';
import {DialogModule} from "./components/dialog/dialog.module";
import {ButtonModule} from "./components/button/button.module";
import {TextboxModule} from "./components/textbox/textbox.module";
import {FormControlModule} from "./components/form-control/form-control.module";
import {VALIDATION_ERRORS} from "./injectionTokens";
import {ControlErrorModule} from "./components/control-error/control-error.module";


@NgModule({
	declarations: [],
	imports: [
		DialogModule,
		ButtonModule,
		TextboxModule,
		ControlErrorModule,
		FormControlModule
	],
	exports: [
		DialogModule,
		ButtonModule,
		TextboxModule,
		ControlErrorModule,
		FormControlModule
	],
	providers: []
})
export class DaisyUiModule {

	static forRoot(config: any): ModuleWithProviders<DaisyUiModule> {

		return {
			ngModule: DaisyUiModule,
			providers: [
				{
					provide: VALIDATION_ERRORS,
					useValue: config?.validationErrors,
				}
			]
		}
	}
}
