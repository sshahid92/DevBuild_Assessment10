import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/models/post.model';
import { PostFormComponent } from 'src/components/social-posts/post-form/post-form.component';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  

  chits: Array<Post> = [
    { title: 'What is Chitter', message: 'Chitter is the knock off version of twitter made famouse by the niche show known as The IT Crowd.' },
    { title: 'To Code or Not To Code', message: 'Sometimes one may wish to code, but then sometimes one may wish to eat. Choices such as these only Sophie can make.' },
    { title: 'Does everybody poop?', message: 'It is said that everybody poops...but do they.....yes, they do.' },
    { title: 'Thinking of Chits', message: 'It is quite hard to chit many times in a row' }    
  ];

  newChit: Post;

  //selectedChit: Post;

  constructor() { }

  ngOnInit() {
  }

  saveChit(title: string, message: string): void {
    this.newChit = {title, message}
    this.chits.unshift(this.newChit);
  }
}
