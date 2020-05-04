import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from 'app/models/post';
import { Category } from 'app/models/category';


@Injectable()
export class PostsService {

  private _wpBase = environment.wpBase;

  constructor(private http: HttpClient) { }

  getPages(): Promise<Post[]> {
    return this.http.get<Post[]>(this._wpBase + 'pages').toPromise();
  }

  getPosts(): Promise<Post[]> {
    return this.http.get<Post[]>(this._wpBase + 'posts').toPromise();
  }

  getPost(slug: string): Promise<Post[]> {
    return this.http.get<Post[]>(this._wpBase + `posts?slug=${slug}`).toPromise();
  }

  getCategories(): Promise<Category[]> {
    return this.http.get<Category[]>(this._wpBase + 'categories').toPromise();
  }

  getCategory(id: number): Promise<Post[]> {
    return this.http.get<Post[]>(this._wpBase + `posts?categories=${id}`).toPromise();
  }

}
