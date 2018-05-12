import { LecturePage } from "./../lecture/lecture";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

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
    public http: HttpClient
  ) {
    this.http
      .get(
        "https://samples.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=b6907d289e10d714a6e88b30761fae22"
      )
      .subscribe(data => {
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
