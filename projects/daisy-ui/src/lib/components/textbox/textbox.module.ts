import {NgModule} from '@angular/core';
import {TextboxDirective} from './textbox.directive';


@NgModule({
	declarations: [TextboxDirective],
	exports: [TextboxDirective],
	imports: []
})
export class TextboxModule {
}
