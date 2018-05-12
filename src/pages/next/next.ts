import { LecturePage } from "./../lecture/lecture";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http"; //must import for http gets

/**
 * Generated class for the NextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-next",
  templateUrl: "next.html"
})
export class NextPage {
  weatherList: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient //declare HttpClient to http chuchu
  ) {
    this.http
      .get(
        //fetch the api's data
        "http://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22"
      )
      .subscribe(data => {
        console.log(data);
        this.weatherList = data;
        console.log(this.weatherList);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad NextPage");
  }

  lecture(data) {
    this.navCtrl.push(LecturePage, { data });
  }
}
