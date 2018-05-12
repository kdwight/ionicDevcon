import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the NgModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ng-model",
  templateUrl: "ng-model.html"
})
export class NgModelPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get("data");
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad NgModelPage");
  }
}
