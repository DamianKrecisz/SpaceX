import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {
  private loader = false;
  private showRequestCount = 0;
  loadingStatus: Subject<boolean> = new Subject();

  get loading(): boolean {
    return this.loader;
  }

  set loading(value) {
    this.loader = value;
    this.loadingStatus.next(value);
  }

  startLoading(): void {
    this.showRequestCount++;
    if (!this.loader) {
      this.loading = true;
    }
  }

  stopLoading(): void {
    this.showRequestCount = this.showRequestCount > 0 ? this.showRequestCount - 1 : 0;
    if (this.showRequestCount === 0) {
      this.loading = false;
    }
  }
}
