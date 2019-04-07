import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

  /**
   * Get data from the OmdbApi
   * map the result to return only the results that we need
   *
   * @param {string} title Search Term
   * @returns Observable with the search results
   */
  /*getUsers(): Observable<any> {

    return this.http.get('http://ec2-34-243-7-84.eu-west-1.compute.amazonaws.com:8080/v1/users').pipe(
        map(results => results['users']));
  }*/

  openDetails(user) {

  }

}
