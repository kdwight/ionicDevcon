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

  // refresh(): void {
  //   // window.location.reload();
  //   this.navCtrl.setRoot(this.navCtrl.getActive().component);
  // }

  ionViewWillEnter() {
    this.myDefaultMethodToFetchData();
  }

  refresh() {
    this.ionViewWillEnter();
  }

  myDefaultMethodToFetchData() {
    this.http
      .get("https://saantayokakain.com/API/saankakain.php")
      .subscribe(data => {
        const rand = Math.floor(Math.random() * 30);
        this.kakainBa = data.restaurantDB[rand];
        console.log(this.kakainBa);
      });
  }
}
