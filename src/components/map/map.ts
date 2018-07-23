import { Component } from '@angular/core';
declare var AMap
/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  text: string;
  zoomLevel: number = 11;
  constructor() {
    console.log('Hello MapComponent Component');
    this.text = 'Hello World';
    this.loadMapAsync();
  }

  loadMapAsync() {
    let that = this
    return new Promise(function (resolve, reject) {
        window['mapLoaded'] = function () {
            console.log('1')
            let myLatlng = [28.6 , 115.9];

            var myOptions = {
                zoom: that.zoomLevel,
                center: myLatlng,
                // mapTypeId: qq.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            }
            var map = new AMap.Map(document.getElementById("map"), myOptions)
            resolve(map)
        }
        var url = 'https://webapi.amap.com/maps?v=1.4.8&key=7268662b0c505659ebc552eb321e8ba1&callback=mapLoaded';
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi)
    })
  }
}
