import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SocialPostsComponent } from 'src/components/social-posts/social-posts.component';
import {Post} from 'src/models/post.model'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {


  @Input() newChit: Post;
  @Output() chitToSave = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  sendData(title: string, message: string) {
    
    this.newChit = {title, message}
    this.chitToSave.emit(this.newChit)
  }

}
