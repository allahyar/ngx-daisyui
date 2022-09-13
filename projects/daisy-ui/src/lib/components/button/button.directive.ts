import {Directive, ElementRef, HostBinding, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Subscription} from "rxjs";

type ButtonType =
	'info'
	| 'error'
	| 'warning'
	| 'glass'
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'disabled'
	| 'ghost'
	| 'link';

type ButtonShape =
	'circle'
	| 'square'
	| 'block'
	| 'wide'
	| null;


type ButtonSize = 'lg' | 'sm' | 'xs' | null

@Directive({
	selector: 'button[du-button]'
})
export class ButtonDirective implements OnInit {

	@Input() color!: ButtonType;
	@Input() size!: ButtonSize;
	@Input() loading: boolean = false;
	@Input() outline: boolean = false;
	@Input() active: boolean = false;
	@Input() icon!: string;
	@Input() shape!: ButtonShape;

	promise: any;

	@Input()
	set loader(value: any) {
		const isSubscription: boolean = value instanceof Subscription;
		if (isSubscription) {
			this.promise = new Promise((resolve: any) => {
				(value as Subscription).add(resolve);
			});
			this.initLoaderHandler();
		}
		this.loading = value;
	}


	private readonly colors = ['btn-info', 'btn-error', 'btn-warning', 'btn-primary', 'btn-secondary', 'btn-disabled', 'btn-ghost', 'btn-glass', 'btn-link', 'accent']
	private readonly sizes = ['btn-lg', 'btn-sm', 'btn-xs', 'btn-md']
	private readonly shapes = ['btn-circle', 'btn-square', 'btn-block', 'btn-wide']

	constructor(private el: ElementRef,
				@Inject(DOCUMENT) public document: Document,
				private renderer: Renderer2) {
	}


	ngOnInit() {
		if (this.icon) {
			this.makeIcon()
		}
	}

	@HostBinding('class')
	get classList(): string {
		return [
			'btn',
			this.size ? `btn-${this.size}` : ``,
			this.color ? `btn-${this.color}` : ``,
			this.shape ? `btn-${this.shape}` : ``,
			this.active ? `btn-active` : ``,
			this.loading ? `loading` : ``,
			this.outline ? `btn-outline` : ``,
		].join(' ');
	}

	makeIcon() {
		const icon = this.renderer.createElement("i");
		icon.className = this.icon;

		if (this.document.documentElement.dir === 'ltr') {
			const html = this.renderer.createText(this.el.nativeElement.innerHTML);
			this.el.nativeElement.innerText = ''
			this.renderer.appendChild(this.el.nativeElement, icon);
			this.renderer.appendChild(this.el.nativeElement, html);
		} else {
			this.renderer.appendChild(this.el.nativeElement, icon);
		}

	}

	initLoaderHandler() {
		const promise = this.promise;
		if (promise) {

			this.loading = true;
			const resolveLoadingState = () => {
				this.loading = false;
			};

			if (promise.finally) {
				promise.finally(resolveLoadingState);
			} else {
				promise
					.then(resolveLoadingState)
					.catch(resolveLoadingState);
			}
		}
	}


}
