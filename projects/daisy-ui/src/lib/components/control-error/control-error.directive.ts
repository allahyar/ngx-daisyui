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
import {NgControl, ValidationErrors} from "@angular/forms";
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
					const errors = <Object>this.control.errors;
					const key = Object.keys(errors)[Object.keys(errors).length - 1]
					this.prepareErrors(this.validationErrors[key], errors)
					this.host.nativeElement.classList.add('input-error')
				} else {
					this.prepareErrors(null)
					this.host.nativeElement.classList.remove('input-error')
				}
			})
		}
	}

	prepareErrors(test: string | null, error?: ValidationErrors) {

		if (!this.ref) {
			const factory = this.resolver.resolveComponentFactory(DefaultControlErrorComponent)
			this.ref = this.vcr.createComponent<DefaultControlErrorComponent>(factory)
		}

		if (this.errorTemplate) {
			this.ref.instance.createTemplate(this.errorTemplate, error || {}, test)
		} else {
			this.ref.instance.text = test
		}

		this.host.nativeElement.after((this.ref.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement)
	}


	ngOnDestroy() {
		this.statusChangeSubscription.unsubscribe()
	}
}
