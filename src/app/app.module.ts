import { NgModelPage } from "./../pages/ng-model/ng-model";
import { LecturePage } from "./../pages/lecture/lecture";
import { NextPage } from "./../pages/next/next";
import { HackathonPage } from "./../pages/hackathon/hackathon";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NextPage,
    HackathonPage,
    LecturePage,
    NgModelPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NextPage,
    HackathonPage,
    LecturePage,
    NgModelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
