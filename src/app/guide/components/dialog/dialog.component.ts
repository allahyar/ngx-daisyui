import {Component, ElementRef, OnInit} from '@angular/core';
import {DialogService} from "@daisy/ui";
import {ConfirmDialogComponent} from "../../../confirm-dialog/confirm-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'guide-dialog',
	templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {

	constructor(private readonly dialogService: DialogService,
				private router: Router,
				private route: ActivatedRoute,
				private el: ElementRef) {
	}

	ngOnInit(): void {
		this.openDialog()
	}


	openDialog(){
		this.dialogService.open(ConfirmDialogComponent, {
			data: 'adad',
			title: 'Dialog title',
			body: 'This is a test body text'
		}).onClose.subscribe(x => {
			console.log(x)
		})
	}

}
