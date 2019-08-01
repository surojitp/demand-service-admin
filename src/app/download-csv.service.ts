import { Injectable } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Injectable({
  providedIn: 'root'
})
export class DownloadCsvService {

  constructor() { }

  downloadCSV(data, fileName, header) {
    const options: any = {
      headers: header
    };
    // tslint:disable-next-line:no-unused-expression
    new ngxCsv(data, fileName, options);
  }
}
