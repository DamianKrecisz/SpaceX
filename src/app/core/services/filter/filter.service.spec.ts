import { async, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { DatabaseService } from '../database/database.service';
import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;
  let databaseService: DatabaseService;

  let mockSearchModel = { name: 'CRS-24', dates: null, success: null };
  let mockData: [{ name: '1' }, { name: 'testName' }];

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [AppModule] });
    service = TestBed.inject(FilterService);
    databaseService = TestBed.inject(DatabaseService);
  });

  
  it('should filter by name', waitForAsync(() => {
    databaseService.getLatestLaunches().subscribe(e=>{
      service.clonedData.next(e);
      expect(service.filterData(mockSearchModel)[0].name).toEqual('CRS-24')
    })
  }));
  

})


