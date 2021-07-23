import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  userId: Number;
  title: String;
  body: String;
  id: Number;
  postsList: any;
  isCreate: boolean = true;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllPosts()
    .subscribe((data) => {
      this.postsList = data;
    }, (error) => {
      alert(error.status);
    })
  }

  createPost(){
    let body = {
      title: this.title,
      body: this.body,
      user: this.userId
    }
    this.blogService.createPost(body)
    .subscribe((data) => {
      alert('Created')
      this.clear();
    }, (error) => {
      alert(error.status);
    })
  }

  edit(id){
    console.log(id)
    this.isCreate = false;
    this.blogService.getOnePost(id)
    .subscribe((resp: any) => {
      console.log(resp)
      this.userId = resp.userId;
      this.title = resp.title;
      this.body = resp.body;
      this.id = resp.id;
    }, (error) => {
      alert(error.status);
    })
  }

  updatePost(){
    this.isCreate = true;
    let body = {
      title: this.title,
      body: this.body,
      user: this.userId
    }
    this.blogService.updatePost(this.id, body)
    .subscribe((resp) => {
      alert('Updated')
    }, (error) => {
      alert(error.status);
    })
    this.clear();
  }

  clear() {
    this.userId = null;
    this.title = null;
    this.body = null;
  }

  deletePost(id) {
    this.blogService.deletePost(id)
    .subscribe((resp) => {
      alert('Deleted');
    }, (error) => {
      alert(error.status);
    })
  }
}
