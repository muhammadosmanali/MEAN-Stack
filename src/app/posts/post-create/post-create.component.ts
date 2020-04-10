import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = "";
  enteredTitle = "";


  constructor() { }

  ngOnInit(): void {
  }

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
  }

}
