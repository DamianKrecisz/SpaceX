import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILatestLaunches } from '../../interfaces/latest-launches';
import { IRocket } from '../../interfaces/rocket';
import { Ilaunchpad } from '../../interfaces/launchpad';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  getLatestLaunches(): Observable<ILatestLaunches> {
    return this.http.get<ILatestLaunches>(
      'https://api.spacexdata.com/v5/launches/past'
    );
  }
  getSingleLaunch(id: string): Observable<ILatestLaunches> {
    return this.http.get<ILatestLaunches>(
      'https://api.spacexdata.com/v5/launches/' + id
    );
  }
  getLaunchpad(id: string): Observable<Ilaunchpad> {
    return this.http.get<Ilaunchpad>(
      'https://api.spacexdata.com/v4/launchpads/' + id
    );
  }
  getRocket(id: string): Observable<IRocket> {
    return this.http.get<IRocket>(
      'https://api.spacexdata.com/v4/rockets/' + id
    );
  }
}
