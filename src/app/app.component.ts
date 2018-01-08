import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	courses = [
		{id : 1, name : 'course 1'},
		{id : 2, name : 'course 2'},
		{id : 3, name : 'course 3'}
	];
	idx = 4;
	onAdd() {
		this.courses.push({id : this.idx, name : 'course ' + this.idx}); 
		this.idx++;
	}

	onRemove(course) {
		let index = this.courses.indexOf(course);
		this.courses.splice(index, 1);
	}

	onChange(course) {
		course.name = "Updated";
	}
}
