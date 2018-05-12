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
  user: any = {};
  constructor(public navCtrl: NavController) {}

  hackathon() {
    this.navCtrl.push(HackathonPage, {});
  }

  weather() {
    this.navCtrl.push(NextPage, {});
  }

  next() {
    this.navCtrl.push(NgModelPage, { data: this.user });
  }
}
