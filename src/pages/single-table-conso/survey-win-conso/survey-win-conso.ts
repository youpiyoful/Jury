import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-survey-win-conso',
  templateUrl: 'survey-win-conso.html',
})
export class SurveyWinConsoPage implements OnInit {

  idForm: number; // it s a mix between idTable and idWin for an unic id for survey

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {}

  ngOnInit() {
    this.idForm =+ this.navParams.get('idSurvey');
  }
}
