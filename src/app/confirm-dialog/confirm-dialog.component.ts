import {Component, OnInit} from '@angular/core';
import {DialogRef} from "@daisy/ui";
import {IDialogParams} from "@daisy/core";

@Component({
	selector: 'confirm-dialog',
	templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent implements OnInit {

	constructor(private dialogRef: DialogRef<ConfirmDialogComponent, any>) {
	}

	ngOnInit(): void {
	}

	get params(): Partial<IDialogParams> {
		return this.dialogRef.params
	}

	close(result: any = null) {
		this.dialogRef.close(result);
	}

}
