import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {DialogModule} from "@daisy/ui";

@NgModule({
	declarations: [
		AppComponent,
		ConfirmDialogComponent
	],
	imports: [
		BrowserModule,
		DialogModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
