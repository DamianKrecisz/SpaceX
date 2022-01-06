import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { DatabaseService } from './database.service';
describe('DatabaseService', async () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
    service = TestBed.inject(DatabaseService);
  });

  it('should call getRocket() ', waitForAsync(() => {
    service.getRocket('5e9d0d95eda69973a809d1ec').subscribe((res) => {
      expect(res).not.toBeFalse()
    });
  }));
  it('should call getLaunchpad() ', waitForAsync(() => {
    service
      .getLaunchpad('5e9e4502f509094188566f88')
      .subscribe((res) => {
        expect(res).not.toBeFalse()
      });
    }));
  it('should call getSingleLaunch() ', waitForAsync(() => {
    service
      .getSingleLaunch('6161d2006db1a92bfba85356')
      .subscribe((res) => {
        expect(res).not.toBeFalse()
      });
    }));

  it('should call getLatestLaunches() ', waitForAsync(() => {
    service.getLatestLaunches().subscribe((res) => {
      expect(res).not.toBeFalse()
    });
  }));


});
