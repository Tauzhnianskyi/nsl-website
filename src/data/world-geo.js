import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";

export const geographies = feature(worldData, worldData.objects.countries).features;
