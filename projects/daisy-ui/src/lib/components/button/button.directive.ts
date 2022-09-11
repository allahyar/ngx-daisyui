import {Directive, ElementRef, HostBinding, Input} from '@angular/core';

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
export class ButtonDirective {

	@Input() color: ButtonType = 'default';
	@Input() size: ButtonSize = 'normal';
	@Input() isLoading: boolean = false;
	@Input() isOutline: boolean = false;
	@Input() isActive: boolean = false;
	@Input() icon!: string;
	@Input() shape!: ButtonShape;

	private _size!: 'lg' | 'sm' | 'xs' | null


	constructor(private el: ElementRef) {
		if (this.icon) {
			const iconEl = document.createElement("i");
			iconEl.classList.add(this.icon)
			this.el.nativeElement.appendChild(iconEl)
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
}
