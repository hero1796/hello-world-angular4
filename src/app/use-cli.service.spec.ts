import { TestBed, inject } from '@angular/core/testing';

import { UseCliService } from './use-cli.service';

describe('UseCliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseCliService]
    });
  });

  it('should be created', inject([UseCliService], (service: UseCliService) => {
    expect(service).toBeTruthy();
  }));
});
