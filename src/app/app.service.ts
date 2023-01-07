import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class AppService {

private _wpBase = environment.apiRef;

constructor(private http: HttpClient) { }
  getMetadata(): Observable<any> {
    return this.http.get<any>(this._wpBase + `settings`);
  }
}
