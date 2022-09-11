import {Directive, ElementRef, HostBinding, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

type ButtonType =
	'info'
	| 'error'
	| 'warning'
	| 'default'
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

type ButtonSize = 'tiny' | 'small' | 'normal' | 'large'

@Directive({
	selector: 'button[du-button]'
})
export class ButtonDirective implements OnInit {

	@Input() color: ButtonType = 'default';
	@Input() size: ButtonSize = 'normal';
	@Input() isLoading: boolean = false;
	@Input() isOutline: boolean = false;
	@Input() isActive: boolean = false;
	@Input() icon!: string;
	@Input() shape!: ButtonShape;

	private _size!: 'lg' | 'sm' | 'xs' | null


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

		this.setSizeButton()

		return [
			'btn',
			this._size ? `btn-${this._size}` : ``,
			this.color ? `btn-${this.color}` : ``,
			this.shape ? `btn-${this.shape}` : ``,
			this.isActive ? `btn-active` : ``,
			this.isLoading ? `loading` : ``,
			this.isOutline ? `btn-outline` : ``,
		].join(' ');
	}

	setSizeButton() {
		switch (this.size) {
			case 'normal':
				this._size = null;
				break
			case 'large':
				this._size = 'lg';
				break
			case 'small':
				this._size = 'sm';
				break
			case 'tiny':
				this._size = 'xs';
				break
			default:
				this._size = null;
		}
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

}
