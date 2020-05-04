import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../../models/navItem';
import { PostsService } from 'app/pages/posts.service';
import { Post } from 'app/models/post';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [PostsService]
})
export class NavigationComponent implements OnInit {
  @Input() stickyNav = false;
  navItems: NavItem[];
  pages: Post[];
  isMobile = false;

  constructor(private postsService: PostsService, private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();

    this.postsService.getCategories().then(items => {
      this.navItems = items;
    });
    this.postsService.getPosts().then(pages => {
      this.pages = pages;
    });
  }

  triggerDropdown(i) {
    this.navItems[i].dropdownActive = !this.navItems[i].dropdownActive;
  }
}
