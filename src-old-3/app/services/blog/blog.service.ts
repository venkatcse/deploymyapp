import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstConstants } from './../../util/const.constant'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(ConstConstants.API_URL);
  }

  getOnePost(id){
    return this.http.get(ConstConstants.API_URL + id);
  }

  getComments(){

  }

  createPost(body){
    return this.http.post(ConstConstants.API_URL, body)
  }

  updatePost(id, body){
    return this.http.put(ConstConstants.API_URL + id, body)
  }

  deletePost(id){
    return this.http.delete(ConstConstants.API_URL + id)
  }

  

}
