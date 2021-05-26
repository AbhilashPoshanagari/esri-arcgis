import { Component, OnInit } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    // private load: loadModules
  ) { }

  ngOnInit() {
  loadModules(['esri/Map', 'esri/views/MapView'])
    .then(([Map, MapView]) => {
      // then we load a web map from an id
      const map = new Map({
          basemap: "topo-vector"
        });
        const view = new MapView({
          container: "viewDiv", // Reference to the view div created in step 5
          map: map, // Reference to the map object created before the view
          zoom: 6, // Sets zoom level based on level of detail (LOD)
          center: [78.476, 17.366] // Sets center point of view using longitude,latitude
        });
    })
    .catch(err => {
      // handle any errors
      console.error(err);
    });
  }

}
