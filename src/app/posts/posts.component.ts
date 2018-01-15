import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  constructor(http : Http) { 

  }

}
