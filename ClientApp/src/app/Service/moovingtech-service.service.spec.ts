import { TestBed } from '@angular/core/testing';

import { MoovingtechServiceService } from './moovingtech-service.service';

describe('MoovingtechServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoovingtechServiceService = TestBed.get(MoovingtechServiceService);
    expect(service).toBeTruthy();
  });
});
