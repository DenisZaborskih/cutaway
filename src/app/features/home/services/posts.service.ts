import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Posts } from '../../../core/interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  http : HttpClient = inject(HttpClient);
  
  getPosts(){
    return this.http.get<Posts[]>('api/posts');
  }
}
