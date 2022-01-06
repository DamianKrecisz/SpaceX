export interface ILatestLaunches {
  auto_update: boolean;
  capsules: Array<any>;
  cores: Array<object>;
  crew: Array<any>;
  date_local: string;
  date_precision: string;
  date_unix: number;
  date_utc: string;
  details: string;
  failures: Array<object>;
  fairings: Object|null;
  flight_number: number;
  id: string;
  launch_library_id: any;
  launchpad: string;
  links: {
    article: string|null;
    flickr: { small: Array<string>; original: Array<string> };
    patch: {
      small: string;
      large: string;
    };
    presskit: null;
    reddit: {
      campaign: string;
      launch: string;
      media: any;
      recovery: string|null;
    };
    webcast: string;
    wikipedia: string|null;
    youtube_id: string;
  };
  name: string;
  net: boolean;
  payloads: string|Array<string>;
  rocket: string;
  ships: Array<any>;
  static_fire_date_unix: number|null;
  static_fire_date_utc: string|null;
  success: boolean;
  tbd: boolean;
  upcoming: boolean;
  window: number;
}
