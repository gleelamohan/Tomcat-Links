
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IEnvironment } from './environment';

@Injectable()
export class EnvironmentService {
    private _productUrl = 'http://localhost/paris.json';

    constructor(private _http: Http) { }

    getEnvDetails(): Observable<IEnvironment[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IEnvironment[]> response.json());
           
    }
  
}