import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
	@Input("is-favorite") isFavorite : boolean;
  @Output("on-change") onChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
  	this.isFavorite = !this.isFavorite;
    this.onChange.emit({newValue : this.isFavorite});
  }
}

export interface FavoriteChangedEventArgs {
  newValue : boolean
}