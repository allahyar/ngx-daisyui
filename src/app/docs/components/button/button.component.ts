import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
	selector: 'guide-button',
	templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit, OnDestroy {

	form!: FormGroup
	userSubscription!: Subscription

	constructor(private fb: FormBuilder,
				private http: HttpClient) {
		this.form = fb.group({
			firstname: [{value: null, disabled: false}, [Validators.required, Validators.minLength(3)]],
			lastname: [{value: null, disabled: false}, [Validators.required]],
			gender: [{value: null, disabled: false}, [Validators.required]],
		})
	}

	ngOnInit(): void {
	}

	getUser() {
		this.userSubscription = this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(x => {
			console.log(x)
		})
	}

	ngOnDestroy() {
		this.userSubscription.unsubscribe()
	}

}
