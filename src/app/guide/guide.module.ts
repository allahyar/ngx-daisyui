import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GuideComponent} from './guide.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {ButtonComponent} from './components/button/button.component';
import {DaisyUiModule} from "@daisy/ui";
import {DialogModule} from "@daisy/ui";
import {ButtonModule} from "@daisy/ui";
import {FormControlModule} from "@daisy/ui";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

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
		GuideComponent,
		DialogComponent,
		ButtonComponent
	],
	imports: [
		CommonModule,
		// DialogModule,
		// ButtonModule,
		// FormControlModule,
		DaisyUiModule.forRoot({
			validationErrors: {
				required: 'این فیلد الزامی است',
				minlength: 'تعداد کاراکترها باید بیشتر باشد'
			}
		}),
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forChild(routes)
	]
})
export class GuideModule {

}
