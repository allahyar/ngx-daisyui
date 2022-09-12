import { NgModule } from '@angular/core';
import {DialogModule} from "./components/dialog/dialog.module";
import {ButtonModule} from "./components/button/button.module";
import {TextboxModule} from "./components/textbox/textbox.module";
import {FormControlModule} from "./components/form-control/form-control.module";



@NgModule({
  declarations: [],
  imports: [
	  DialogModule,
	  ButtonModule,
	  TextboxModule,
	  FormControlModule
  ],
  exports: [
	  DialogModule,
	  ButtonModule,
	  TextboxModule,
	  FormControlModule
  ]
})
export class DaisyUiModule { }
