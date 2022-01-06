export interface IRocket {
  height: Object;
  diameter: Object;
  mass: Object;
  first_stage: Object;
  second_stage: Object;
  engines: Object;
  landing_legs: Object;
  payload_weights: Array<Object>;
  flickr_images: Array<string>;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}
