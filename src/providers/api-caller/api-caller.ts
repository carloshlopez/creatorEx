import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiCallerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiCallerProvider {
  baseUrl:string = "https://realhero-test.herokuapp.com/api/v1/";
  constructor(private httpClient: HttpClient) {
    console.log('Hello ApiCallerProvider Provider');
  }

  public getAllOrganizations(){
    return this.httpClient
        .get(this.baseUrl + 'organizations').subscribe(res => {
          console.log("Res", res);
        });
  }

}

export class Organization {
   id: number;
   name: string;
   constructor(values: Object = {}) {
        Object.assign(this, values);
   }
}
