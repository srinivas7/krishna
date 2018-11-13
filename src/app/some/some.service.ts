import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SomeService {

  constructor(public http: HttpClient){

  }
  getSome(): Observable<{}> {

    
    return this.http.get<any>('/api/user')
        .map((response: any) => response);
  }
}
