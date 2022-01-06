export interface Ilaunchpad {
  details: string;
  full_name: string;
  id: string;
  images: Object;
  latitude: number;
  launch_attempts: number;
  launch_successes: number;
  launches: Array<string>;
  locality: string;
  longitude: number;
  name: string;
  region: string;
  rockets: Array<string>;
  status: string;
  timezone: string;
}
