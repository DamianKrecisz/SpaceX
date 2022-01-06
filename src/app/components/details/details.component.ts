import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { forkJoin, mergeMap, Observable, switchMap, tap } from 'rxjs';
import { ILatestLaunches } from 'src/app/core/interfaces/latest-launches';
import { DatabaseService } from 'src/app/core/services/database/database.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  launch!: ILatestLaunches;
  launchpad!: string;
  rocket!: string;
  images: Array<string> = [];
  photosLoaded = false;
  responsiveOptions: Array<object> = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '960px',
      numVisible: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) {}
  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.databaseService.getSingleLaunch(params['id']);
        }),
        mergeMap((data) => {
          this.launch = data;
          this.images = data.links.flickr.original;
          const getRocket = this.databaseService.getRocket(data['rocket']);
          const getLaunchpad = this.databaseService.getLaunchpad(
            data['launchpad']
          );
          return forkJoin([getRocket, getLaunchpad]);
        })
      )
      .subscribe((res: any) => {
        res[0].flickr_images.forEach((rocketImage: string) => {
          this.images.push(rocketImage);
        });
        this.rocket = res[0].name;
        this.launchpad = res[1].full_name;
        this.photosLoaded = true;
      });
  }
}
