import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from 'app/models/post';
import { Category } from 'app/models/category';


@Injectable()
export class PostsService {

  private _apiRef = environment.apiRef;

  constructor(private http: HttpClient) { }

  getPages(): Promise<Post[]> {
    return this.http.get<Post[]>(this._apiRef + 'pages').toPromise();
  }

  getPosts(): Promise<Post[]> {
    return this.http.get<Post[]>(this._apiRef + 'posts').toPromise();
  }

  getPost(slug: string): Promise<Post[]> {
    return this.http.get<Post[]>(this._apiRef + `posts?slug=${slug}`).toPromise();
  }

  getCategories(): Promise<Category[]> {
    return this.http.get<Category[]>(this._apiRef + 'categories').toPromise();
  }

  getCategory(id: number): Promise<Post[]> {
    return this.http.get<Post[]>(this._apiRef + `posts?categories=${id}`).toPromise();
  }

}
