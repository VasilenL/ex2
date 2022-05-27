import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../services/post";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input()
  posts: Post[] = [];

  @Output()
  onDelete: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deletePost(post: Post) {
    this.onDelete.emit(post);
  }
}
