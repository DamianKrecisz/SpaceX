import { Component } from '@angular/core';
import * as _ from 'lodash';
import { SearchModel } from 'src/app/core/interfaces/search-model';
import { FilterService } from 'src/app/core/services/filter/filter.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  searchModel = new SearchModel();
  latestLaunches = this.filterSevice.actualData;
  loadMoreCount = 20;

  constructor(private filterSevice: FilterService) {}

  trackByFlightNumber = (flight_number: any, launch: any) => launch;

  filter() {
    this.filterSevice.filterData(this.searchModel);
  }
  
  loadMore() {
    this.loadMoreCount=this.loadMoreCount+20;
  }
}
