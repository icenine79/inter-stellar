export interface RoverCamera {
  full_name: string;
  name: string;
  rover_id: number;
  earth_date: string;
  id: number;
  img_src: string;
  rover: {
      id: number;
      name: string;
      landing_date: string;
      launch_date: string;
      status: string;
  };
  sol: number;
}
