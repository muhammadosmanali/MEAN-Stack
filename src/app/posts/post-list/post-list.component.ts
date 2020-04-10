import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'First Post', content: 'This is first post content.'},
  //   {title: 'Second Post', content: 'This is second post content.'},
  //   {title: 'Third Post', content: 'This is third post content.'},
  // ];
  @Input() posts: Post[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
