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
  zoomLevel: number = 3;
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
            let myLatlng = [ 115.9, 28.6];

            var myOptions = {
                zoom: that.zoomLevel,
                center: myLatlng,
                // mapTypeId: qq.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            }
            var map = new AMap.Map(document.getElementById("map"), myOptions)
            let positions = [
              new AMap.LngLat(116.397477,39.908692), //北京天安门
              new AMap.LngLat(118.110221,24.490474), //厦门
              new AMap.LngLat(114.165853,22.276683), //香港
              new AMap.LngLat(112.924316,28.257777), //长沙
              new AMap.LngLat(121.4552,31.345972), //上海
              new AMap.LngLat(117.857864,29.252813), //婺源
              new AMap.LngLat(117.131393,39.061278), //天津
            ]

            positions.forEach((lngLat) => {
              map.add(new AMap.Marker({
                icon: "assets/icon/feet.png",
                position: lngLat,
                offset: new AMap.Pixel(-16, -17)
              }))
            })
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
