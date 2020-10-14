import { Cameras } from "./models/Camera";

export const cameras: Cameras[] = [
  { name: 'FAHZ', fullname: "Front Hazard Avoidance Camera" },
  { name: 'RHAZ', fullname: "Rear Hazard Avoidance Camera" },
  { name: 'MAST', fullname: "Mast Camera" },
  { name: 'CHEMCAM', fullname: "Chemistry and Camera Complex" },
  { name: 'MAHLI', fullname: "Mars Hand Lens Imager" },
  { name: 'MARDI', fullname: "Mars Descent Imager" },
  { name: 'NAVCAM', fullname: "Navigation Camera" },
  { name: 'PANCAM', fullname: "Panoramic Camera" },
  { name: 'MINITES', fullname: "Miniature Thermal Emission Spectrometer (Mini-TES)" }
];

//Table Rows
export const displayedColumns = ['id', 'sol', 'earth_date', 'img_source'];

