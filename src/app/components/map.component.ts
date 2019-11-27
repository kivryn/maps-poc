import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;
declare var jvm: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    var visitData = {
      "CN": 15,
      "RU": 2,
      "US": 80,
      "CA": 60
    };

    var markers = [
      {latLng: [37.59, -112.18], name: 'Bryce Canyon National Park', weburl:'/location/fred/123'},
      {latLng: [36.86, -111.37], name: 'Antelope Canyon', weburl:'/location/fred/antelope'},
      {latLng: [34.97, 135.77], name: 'Fushimi Inari Shrine', weburl:'/location/fred/123'}
    ]

    jQuery('#world-map').vectorMap({
      map: 'world_mill',
      scaleColors: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
      hoverOpacity: 0.7,
      hoverColor: false,
      markerStyle: {
        initial: {
          fill: '#FF580F',
          stroke: '#383f47'
        }
      },
      backgroundColor: '#2a9df4',
      series: {
        regions: [{
          values: visitData,
          // scale: ['#FFc99D', '#FF580F'],
          // scale: ['#FFc99D', '#FF580F'],
          scale: ['#EBEBEB', '#FFBC42'],
          normalizeFunction: 'polynomial'
        }]
      },
      onRegionTipShow: function(e, el, code){
        if (visitData[code]) {
          el.html(el.html()+'<br>(Visited - '+visitData[code]+')');
        }
      },
      markers: markers,
      onMarkerClick: (event, index) => {
          // alter the weburl
          console.log(markers[index].weburl, index);
          setTimeout(()=> { Array.from(document.getElementsByClassName("jvectormap-tip")).forEach((el) => { el.style.display = 'none' }); },100);
          this.router.navigate([markers[index].weburl]);
      }
    }); 
  }

}
