import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, mergeMap, take } from 'rxjs';
import { ILatestLaunches } from '../../interfaces/latest-launches';
import { SearchModel } from '../../interfaces/search-model';
import { DatabaseService } from '../database/database.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  clonedData = new BehaviorSubject<any>(null);
  actualData = new BehaviorSubject<any>(null);
  dataToFilter: Array<any> = [];
   

  constructor(private databaseService: DatabaseService) {
    this.retriveData();
    this.filterData(null);
  }

  retriveData() {
    this.databaseService.getLatestLaunches().subscribe((e: any) => {
      _.reverse(e);
      this.clonedData.next(e);
      this.actualData.next(e);
    });
  }

  filterData(model: any) {
    this.dataToFilter=[];
    let searchModel:any={}
    this.clonedData.subscribe((items) => {
      if (items !== null) {
        items.forEach((launch: ILatestLaunches) => {
          if (model !== null && model?.dates !== null && model?.dates !== '') {
            const currentDate = new Date(launch.date_local);
            const minDate = model.dates[0];
            const maxDate = model.dates[1];
            if (
              minDate > currentDate === false &&
              maxDate < currentDate === false
            ) {
              this.dataToFilter.push(launch);
            }
          } else {
            this.dataToFilter.push(launch);
          }
        });
      }
    });

    if (model !== null && model?.name !== null && model?.name !== '') {
      searchModel['name'] = model.name;
    }
    if (model !== null && model?.success !== null && model?.success !== false) {
      searchModel['success'] = model.success;
    }

    const filteredData=_.filter(this.dataToFilter, searchModel);
    this.actualData.next(filteredData);
    return filteredData;
  }
}
