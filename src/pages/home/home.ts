import { NgModelPage } from "./../ng-model/ng-model";
import { HackathonPage } from "./../hackathon/hackathon";
import { NextPage } from "../next/next";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  user: any = {}; //this is where the inputs from home.html binded with ngModel are stored
  constructor(public navCtrl: NavController) {}

  hackathon() {
    // push to imported HackathonPage
    this.navCtrl.push(HackathonPage, {});
  }

  weather() {
    // push to imported NextPage
    this.navCtrl.push(NextPage, {});
  }

  next() {
    // push to imported NgModelPage with the datas from the user from the above
    this.navCtrl.push(NgModelPage, { data: this.user });
  }
}
