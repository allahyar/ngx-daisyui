import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GuideComponent} from './guide.component';
import {DialogComponent} from './components/dialog/dialog.component';
import { ButtonComponent } from './components/button/button.component';

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
		RouterModule.forChild(routes)
	]
})
export class GuideModule {
}
