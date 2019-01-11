import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialPostsComponent } from 'src/components/social-posts/social-posts.component';
import { PostFormComponent } from 'src/components/social-posts/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    SocialPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
