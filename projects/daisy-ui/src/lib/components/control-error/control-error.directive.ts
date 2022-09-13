import {
	ComponentFactoryResolver,
	ComponentRef,
	Directive,
	ElementRef,
	EmbeddedViewRef, Inject, Input, OnDestroy,
	OnInit,
	Optional,
	Self,
	ViewContainerRef
} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NgControl} from "@angular/forms";
import {DefaultControlErrorComponent} from "./default-control-error/default-control-error.component";
import {VALIDATION_ERRORS} from "../../injectionTokens";
import {ErrorComponentTemplate} from "@daisy/core";

@Directive({
	selector: '[control-error]'
})
export class ControlErrorDirective implements OnInit, OnDestroy {

	@Input() errorTemplate!: ErrorComponentTemplate
	private statusChangeSubscription!: Subscription;
	private ref!: ComponentRef<DefaultControlErrorComponent>

	constructor(@Optional() @Self() private control: NgControl,
				private host: ElementRef<HTMLElement>,
				private vcr: ViewContainerRef,
				private resolver: ComponentFactoryResolver,
				@Inject(VALIDATION_ERRORS) private validationErrors: any) {
	}

	ngOnInit() {
		if (this.control && this.control.statusChanges instanceof Observable) {
			this.statusChangeSubscription = this.control.statusChanges.subscribe((status) => {
				if (status == 'INVALID') {
					console.log('INVALID')
					this.setError()
					// this.showError();
					this.host.nativeElement.classList.add('input-error')
				} else {
					// this.removeError();
					if (this.ref) {
						this.ref.instance.text = null
					}
					// this.ref.destroy()
					console.log('VALID')
					this.host.nativeElement.classList.remove('input-error')
				}
			})
		}
	}

	setError() {
		if (!this.control.errors) return
		let errorText;
		for (const [key, value] of Object.entries(this.control.errors)) {
			console.log(key)
			errorText = this.validationErrors[key]
		}

		if (!this.ref) {
			const factory = this.resolver.resolveComponentFactory(DefaultControlErrorComponent)
			this.ref = this.vcr.createComponent<DefaultControlErrorComponent>(factory)

			if (this.errorTemplate) {
				this.ref.instance.createTemplate(this.errorTemplate, this.control.errors, errorText)
			}
		}

		this.ref.instance.text = errorText

		this.host.nativeElement.after((this.ref.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement)
	}


	ngOnDestroy() {
		this.statusChangeSubscription.unsubscribe()
	}
}
