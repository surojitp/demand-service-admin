import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { CONFIG } from '../../../config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  constructor(private _http: Http, ) { }
  getToken() {
    return localStorage.getItem('admintoken');
  }
  authHeader(headers: Headers) {
    headers.append('x-access-token', this.getToken());
    headers.append('authtoken', this.getToken());
  }
  private _errorHandler(error: Response) {
    return Observable.throw(error.json() || 'Server Error');
  }
  doLogin(loginData) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_ON + 'login';
    return this._http.post(URL, loginData, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // All User list
  getAllUser(data) {
    // console.log("dddddddddd",data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_ON + 'listUser';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // Edit User
  editUser(data: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_ON + 'editUser';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // All Agent list
  getAllProvider(data) {
    // console.log("dddddddddd",data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_ON + 'listProvider';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // Edit Agent
  editProvider(data: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_ON + 'editProvider';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // All Booking list
  listBooking(data) {
    // console.log("dddddddddd",data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_ON + 'listBooking';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // COMPLETE SERVICE
  completeService(data) {
    // console.log("dddddddddd",data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_ON + 'completeService';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // Get Service Radius
  getRadius(data) {
    // console.log("dddddddddd",data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_ON + 'getRadius';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // Update Service Radius
  updateRadius(data) {
    // console.log("dddddddddd",data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_ON + 'updateRadius';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }


}

