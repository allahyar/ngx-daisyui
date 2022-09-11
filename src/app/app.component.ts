import {AfterViewInit, Component, ComponentRef, ElementRef, OnInit} from '@angular/core';
import {DialogService} from "@daisy/ui";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	title = 'ngx-daisyui';

	constructor() {
	}

	ngOnInit(): void {

	}

}
