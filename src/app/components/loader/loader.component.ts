import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subscription } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements AfterViewInit, OnDestroy {

  debounceTime = 200;
  loading = false;
  showLoader = false;
  loadingSubscription: Subscription | undefined;
  constructor(
    private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef,
    private elmRef: ElementRef
  ) {

  }

  ngAfterViewInit(): void {
    this.elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loaderService.loadingStatus
      .pipe(debounceTime(this.debounceTime))
      .subscribe((status: boolean) => {
        this.elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    if ( this.loadingSubscription ) {
    this.loadingSubscription.unsubscribe();
    }
  }

}
