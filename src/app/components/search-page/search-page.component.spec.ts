import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';
import { SearchPageComponent } from './search-page.component';
import { BehaviorSubject } from 'rxjs';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [SearchPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display "zaladuj wiecej" button if latestLaunches < 20', () => {
    component.latestLaunches.next(null)
    const btn = fixture.debugElement.nativeElement.querySelector('#load-more');
    expect(btn).toBeNull();
  });

  it('should increase loadMoreCount by 20', () => {
    let prevValue = component.loadMoreCount;
    component.loadMore();
    expect(component.loadMoreCount).toBe(prevValue+20)
  });
});
