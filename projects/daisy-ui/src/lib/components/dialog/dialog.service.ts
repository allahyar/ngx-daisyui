import {
	ApplicationRef,
	ComponentFactoryResolver,
	EmbeddedViewRef, Inject,
	Injectable,
	Injector,
	StaticProvider,
} from '@angular/core';
import {ComponentType} from '@angular/cdk/overlay';
import {DialogRef} from "./dialog-ref";
import {delay, filter, of} from "rxjs";
import {IDialogParams} from "@daisy/core";
import {NavigationStart, Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class DialogService {

	private dialogRef!: DialogRef<any, any>

	constructor(private resolver: ComponentFactoryResolver,
				@Inject(DOCUMENT) private document: Document,
				private appRef: ApplicationRef,
				private router: Router,
				private injector: Injector
	) {
		this.closeOnRouteChanged()
	}

	open<TComponent, TResult>(component: ComponentType<TComponent>,
							  options: Partial<IDialogParams>): DialogRef<TComponent, TResult> {

		let factory = this.resolver.resolveComponentFactory(component);
		this.dialogRef = new DialogRef<TComponent, TResult>(options);

		const providers: StaticProvider[] = [
			{provide: DialogRef, useValue: this.dialogRef}
		];

		const injector = Injector.create({providers, parent: this.injector});
		const componentRef = factory.create(injector);


		of(componentRef).pipe(delay(200)).subscribe(_ => {
			componentRef.location.nativeElement.children[0].classList.add('modal-open')
		})

		document.body.classList.add('overflow-hidden');
		this.appRef.attachView(componentRef.hostView)

		let domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

		(<HTMLElement>options.context ?? this.document.body).appendChild(domElement);

		this.dialogRef.componentRef = componentRef;

		return this.dialogRef;
	}


	closeOnRouteChanged() {
		this.router.events
			.pipe(filter(event => event instanceof NavigationStart))
			.subscribe(() => {
				this.dialogRef.close()
			})
	}
}
