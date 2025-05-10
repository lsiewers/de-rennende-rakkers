import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../../models/post';
import 'rxjs/add/operator/switchMap';
import { Header } from 'app/models/header';
import { Category } from 'app/models/category';
import { environment } from 'environments/environment';


@Component({
    selector: 'app-content-page',
    templateUrl: './content-page.component.html',
    styleUrls: ['./content-page.component.scss'],
    providers: [PostsService],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class ContentPageComponent implements OnInit {
  header: Header = {background: {type: '', subtype: '', url: '', title: ''}, title: ''};
  content: string;
  page: Post;
  category: Category;
  wpBase = environment.wpBase;

  constructor( private pagesService: PostsService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.setPageData();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  setPageData() {
    this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.pagesService.getPost(params.get('slug')))
    .subscribe(
      (page: Post[]) => {
        this.page = page[0];
        if (this.page.acf.header.header_image) {
          this.header.background =  this.page.acf.header.header_image;
        } else { this.header.background =  this.page.acf.header.header_video; }
        this.header.title = this.page.title.rendered;
        this.content = this.page.content.rendered;

        this.pagesService.getCategories().then((categories: Category[]) => {
          this.category = categories.filter(cat => cat.id === this.page.categories[0] )[0];
        });
      },
      (err: HttpErrorResponse) => err.error instanceof Error ? console.log('An error occurred:', err.error.message) : console.log(`Backend returned code ${err.status}, body was: ${err.error}`)
    );
  }

}
