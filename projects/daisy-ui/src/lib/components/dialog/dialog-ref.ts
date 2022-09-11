import {Subject} from "rxjs";
import {ComponentRef} from "@angular/core";
import {IDialogParams} from "@daisy/core";

export class DialogRef<TComponent, TResult> {

	public onClose: Subject<TResult | null> = new Subject<TResult | null>()
	public componentRef!: ComponentRef<TComponent>

	constructor(public params: Partial<IDialogParams>) {
	}

	close(data: TResult | null = null) {
		document.body.classList.remove('overflow-hidden');
		this.componentRef.destroy();
		this.onClose.next(data);
	}
}
