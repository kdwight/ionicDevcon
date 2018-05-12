import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the HackathonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-hackathon",
  templateUrl: "hackathon.html"
})
export class HackathonPage {
  kakainBa: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HackathonPage");
  }

  ionViewWillEnter() {
    this.fetchFuds();
  }

  refresh() {
    this.ionViewWillEnter();
  }

  fetchFuds() {
    this.http
      .get("https://saantayokakain.com/API/saankakain.php")
      .subscribe((data: any) => {
        //(data: any) if there's error when the data has more inner objects
        const rand = Math.floor(Math.random() * 30);
        this.kakainBa = data.restaurantDB[rand]; //sweet
        console.log(this.kakainBa);
      });
  }
}
