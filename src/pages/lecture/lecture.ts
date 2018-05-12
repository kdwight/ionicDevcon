import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the LecturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lecture",
  templateUrl: "lecture.html"
})
export class LecturePage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get("data");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LecturePage");
  }
}
