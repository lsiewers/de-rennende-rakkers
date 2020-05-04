import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { RoutingModule } from './app-routing.module';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ClickOutsideModule } from 'ng-click-outside';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ObserverDirective } from './directives/observer.directive';
import { FacebookComponent } from './components/facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    ContentPageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SafeHtmlPipe,
    ObserverDirective,
    FacebookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    IconSpriteModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
