import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Post } from 'app/models/post';
import { Category } from 'app/models/category';
import { PostsService } from '../posts.service';
import { Header } from 'app/models/header';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostsService],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  page: Post;
  categories: Category[];
  header: Header = {background: {type: '', subtype: '', url: '', title: ''}, title: ''};
  wpBase = environment.wpBase;
  portraits = [];
  assetsPath: string;

  constructor(private postsService: PostsService) {
    }

  ngOnInit() {
    this.postsService.getPages().then((pages: Post[]) => {
      this.page = pages[0];
      if (this.page.acf.header_image) {
        this.header.background =  this.page.acf.header_image;
      } else { this.header.background =  this.page.acf.header_video; }
      this.header.title = this.page.title.rendered;
      this.portraits.push(this.page.acf.henri);
      this.portraits.push(this.page.acf.wia);
    });

    this.postsService.getCategories().then((categories: Category[]) => {
      this.categories = categories;
    });
  }

}
