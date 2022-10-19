import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DocsComponent} from './docs.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {ButtonComponent} from './components/button/button.component';
import {DaisyUiModule} from "@daisy/ui";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {InstallComponent} from './components/install/install.component';
import {CustomizeComponent} from './components/customize/customize.component';

const routes: Routes = [
	{
		path: 'dialog',
		component: DialogComponent
	},
	{
		path: 'button',
		component: ButtonComponent
	}
]

@NgModule({
	declarations: [
		InstallComponent,
		CustomizeComponent,
		DocsComponent,
		DialogComponent,
		ButtonComponent
	],
	imports: [
		CommonModule,
		DaisyUiModule.forRoot({
			validationErrors: {
				required: 'This field is required.',
				minlength: 'The number of characters should be more.'
			}
		}),
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forChild(routes)
	]
})
export class DocsModule {

}
