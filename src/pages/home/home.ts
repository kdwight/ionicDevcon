import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NextPage } from "../next/next";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  user: any = {};
  weatherList: any = {};
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http
      // https://samples.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=b6907d289e10d714a6e88b30761fae22
      .get("https://saantayokakain.com/API/saankakain.php")
      .subscribe(data => {
        const a = Math.floor(Math.random() * 30);
        this.weatherList = data.restaurantDB[a];
        console.log(this.weatherList);
      });
  }

  next(info) {
    this.navCtrl.push(NextPage, { data: info });
  }

  refresh(): void {
    window.location.reload();
  }
}
