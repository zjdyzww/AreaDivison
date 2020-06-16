export type AREANAME = string;

export interface POINT {
  lat: number;
  lon: number;
  alt: number;
}

export interface AREA {
  areaName: AREANAME;
  points: POINTS;
}

export type AREAS = AREA[];

export type POINTS = POINT[];
