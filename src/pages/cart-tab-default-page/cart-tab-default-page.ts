import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {ApiCallerProvider} from '../../providers/api-caller/api-caller';

@Component({
  selector: 'page-cart-tab-default-page',
  templateUrl: 'cart-tab-default-page.html'
})
export class CartTabDefaultPagePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(public navCtrl: NavController, private camera: Camera, private apiCaller: ApiCallerProvider) {

  }

  public takePic(){
    console.log("About to call camera", this.options)
    this.camera.getPicture(this.options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

  }

  public callApi(){
    console.log("Calling api")
    this.apiCaller.getAllOrganizations();
  }

}
