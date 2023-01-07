import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Post } from '../../models/post';
import { Category } from '../../models/category';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { DeviceDetectorService } from 'ngx-device-detector';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
  providers: [PostsService],
  animations: [
    trigger('fade', [
        transition('void => *', [
            style({opacity: 0}),
            animate('600ms cubic-bezier(0.215, 0.610, 0.355, 1)')
        ]),
        transition('* => void', [
            animate('400ms ease-out', style({opacity: 1}))
        ])
    ])
  ]
})
export class PageListComponent implements OnInit, OnChanges {
  @Input() category: Category;
  @Input() index: number;
  pages: Post[];
  img: any;
  inView = false;
  animate = false;
  dataLoaded = false;
  animDuration = 400;
  isMobile: boolean;
  wpBase = environment.wpBase;

  constructor(private postsService: PostsService, private route: ActivatedRoute, private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
  }

  ngOnChanges(): void {

    if (this.category) {
      this.postsService.getCategory(this.category.id).then((posts: Post[]) => {
        this.pages = posts.filter(post => post.slug !== this.route.snapshot.params.slug)

        if (this.pages[0]) {
          if (this.pages[0].acf.header_image) {
            this.img = this.pages[0].acf.header_image;
          } else { this.img =  this.pages[0].acf.header_video; }
        }
      });
    }
  }

  changeGallery(i) {
    if (this.pages[i]) {
      if (this.pages[i].acf.header_image) {
        if (this.img !== this.pages[i].acf.header_image) {
          this.animateGallery(this.pages[i].acf.header_image);
        }
      } else {
        if (this.img !== this.pages[i].acf.header_video) {
          this.animateGallery(this.pages[i].acf.header_video);
        }
      }
    }
  }

  animateGallery(data) {
    this.animate = true;
    this.dataLoaded = false;
    this.img = data;

    setTimeout(() => { this.animate = false }, this.animDuration)
  }

  playVideo(observer) {
    if (observer.inView) {
      observer.el.muted = true;
      observer.el.paused && observer.el.muted ? observer.el.play() : null;
    } else {
      observer.el.paused ? null : observer.el.pause();
    }
  }
}
