import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the VelibMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-velib-map',
  templateUrl: 'velib-map.html',
})
export class VelibMapPage {

  @ViewChild('mapContainer') mapContainer: ElementRef;

  private station;
  private map;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
    this.station = navParams.get('station');
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    this.geolocation.getCurrentPosition().then((response) => {
      let stationCenter = new google.maps.LatLng(this.station.fields.lat, this.station.fields.lon);

      let mapCenter = new google.maps.LatLng(response.coords.latitude, response.coords.longitude);

      let mapOptions = {
        center: mapCenter,
        zoom: 18
      }

      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        position: stationCenter,
        title: this.station.fields.name
      });

      marker.setMap(this.map);

      let marker2 = new google.maps.Marker({
        position: mapCenter,
        title: "Vous êtes içi"
      });
      marker2.setMap(this.map);
    }
    );
  }

}
