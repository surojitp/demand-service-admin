import { TestBed, inject } from '@angular/core/testing';

import { DownloadCsvService } from './download-csv.service';

describe('DownloadCsvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloadCsvService]
    });
  });

  it('should be created', inject([DownloadCsvService], (service: DownloadCsvService) => {
    expect(service).toBeTruthy();
  }));
});
