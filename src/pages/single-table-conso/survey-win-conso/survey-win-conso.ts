import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-survey-win-conso',
  templateUrl: 'survey-win-conso.html',
})
export class SurveyWinConsoPage implements OnInit {

  idForm: number; // it s a mix between idTable and idWin for an unic id for survey
  idWin: number;
  idTable: number;
  iteratorWin: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {}

  ngOnInit() {
    this.idTable =+ this.navParams.get('idSurvey').toString().slice(0,3); // i use toString for explode the array and select what i want
    this.idWin =+ this.navParams.get('idSurvey').toString().slice(3,6); // slice for select what i want in the new array
    console.log(this.idWin);
    this.iteratorWin =+ this.navParams.get('idSurvey').toString().slice(6) + 1;
    this.idForm =+ this.navParams.get('idSurvey');
  }
}
