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
    const URL = CONFIG.API_ENDPOINT_AL + 'editUser';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // All User Settings
  listUserSettings(data) {
    // console.log("dddddddddd",data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'listUserSettings';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  // All AllergeanAlias list
  listAllergeanAlias(data) {
    // console.log("dddddddddd",data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'listAllergeanAlias';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // Add edit AllergenAlias
  addEditAllergenAlias(data: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'addEditAllergenAlias';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  // csv file file upload
  csvUpload( updateFile) {
    const formData: FormData = new FormData();
    formData.append('csv', updateFile);
    const headers = new Headers({ 'Accept': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'csvUploadAllergenAlias';
    return this._http.post(URL, formData, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // csv file to json and insert
  csvDataReadAndInsertAllergenAlias(data: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'csvDataReadAndInsertAllergenAlias';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // All Food Item list
  listFoodItems(data) {
    // console.log("dddddddddd",data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'listFoodItems';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // Add edit AllergenAlias
  addEditlistFoodItems(data: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'addEditlistFoodItems';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // csv file to json and insert list food items
  csvDataReadAndInsertListFoodItems(data: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'csvDataReadAndInsertListFoodItems';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // All product
  listAllProducts(data) {
    // console.log("dddddddddd",data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'listAllProducts';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // Add edit product
  addEditProduct(data: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'addEditProduct';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // get and edit terms
  getEditTerms(data?: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'teams';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  // get and edit privacy
  getEditPrivacy(data?: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.authHeader(headers);
    const options = new RequestOptions({ headers: headers });
    const URL = CONFIG.API_ENDPOINT_AL + 'privacy';
    return this._http.post(URL, data, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
}

