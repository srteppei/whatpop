import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from './category';
import { BackendUri } from './app-settings';

@Injectable()
export class CategoryService {

  constructor(
    private _http: Http,
    @Inject(BackendUri) private _backendUri: string) { }

  getCategories(): Observable<Category[]> {
    return this._http
      .get(`${this._backendUri}/categories`)
      .map((data: Response): Category[] => Category.fromJsonToList(data.json()));
  }

}
