import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HackathonPage } from './hackathon';

@NgModule({
  declarations: [
    HackathonPage,
  ],
  imports: [
    IonicPageModule.forChild(HackathonPage),
  ],
})
export class HackathonPageModule {}
