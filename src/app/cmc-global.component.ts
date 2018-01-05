import {Component} from '@angular/core';
import { CmcGlobalService } from './cmc-global.service';
@Component({
	selector : 'cmc-global',
	template : `
		<h2>{{"Title: " + getTitle() }}</h2>

		<ul>
			<li *ngFor="let emp of emps">
				{{ emp }}
			</li>
		</ul>

		<table>
			<tr>
				<td [attr.colspan] = "colSpan"></td>
			</tr>
		</table>

		<div>
			<button class="btn btn-primary" [class.active] = "isActive">Save</button>
		</div>

		<div>
			<button class="btn btn-primary" [style.backgroundColor] = "isActive ? 'red' : 'blue'">Save</button>
		</div>

		<div>
			<input [value] = "email" (keyup.enter)="email = $event.target.value; onKeyUp($event)"/>
		</div>

		<div>
			<input [(ngModel)]="email" (keyup.enter)="onKeyUp($event)"/>
		</div>
	`
})
export class CmcGlobalComponent {
	title = "Angular auto update dom";
	emps;
	colSpan = 2;
	isActive = false;
	email = "vuthehung17@gmail.com";

	getTitle() {
		return this.title;
	}

	constructor(service : CmcGlobalService) {
		this.emps = service.getEmps();
	}

	onKeyUp($event) {
		console.log($event.target.value);
	}
}