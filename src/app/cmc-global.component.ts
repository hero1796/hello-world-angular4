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
	`
})
export class CmcGlobalComponent {
	title = "Angular auto update dom";
	emps;
	
	getTitle() {
		return this.title;
	}

	constructor(service : CmcGlobalService) {
		this.emps = service.getEmps();
	}
}