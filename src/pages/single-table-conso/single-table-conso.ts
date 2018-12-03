import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { SurveyWinConsoPage } from './survey-win-conso/survey-win-conso';
import { WinsService } from '../../services/wins.service';

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Component({
  selector: 'page-single-table-conso',
  templateUrl: 'single-table-conso.html',
})
export class SingleTableConsoPage implements OnInit {

  table: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private winsService: WinsService,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.table = +this.navParams.get('numberTable'); // i use + for converting my numberTable string in a number variable
    this.winsService.retrieveData(this.table);
    this.winsService.winsFromTable; // i moove all the logic in winsService
  }

  onGoToSurveyWin(idTable: number, idWin: number, iterator: number) {
    this.navCtrl.push(SurveyWinConsoPage, {idSurvey: [idTable.toString() + idWin.toString() + iterator.toString()]});
  }

}
