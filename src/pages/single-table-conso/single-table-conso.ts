import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { SurveyWinConsoPage } from './survey-win-conso/survey-win-conso';
import { WinsService } from '../../services/wins.service';
import { WinForm } from '../../models/WinForm';

// import * as firebase from 'firebase';
// import DataSnapshot = firebase.database.DataSnapshot;

@Component({
  selector: 'page-single-table-conso',
  templateUrl: 'single-table-conso.html',
})
export class SingleTableConsoPage implements OnInit {

  table: number;
  // formExist: boolean;
  winForm: WinForm;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private winsService: WinsService,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.table = +this.navParams.get('numberTable'); // i use + for converting my numberTable string in a number variable
    this.winsService.retrieveData(this.table);
    this.winsService.winsFromTable; // i moove all the logic in winsService
    this.winForm = this.winsService.winFormList['idForm'];
  }

  onGoToSurveyWin(idTable: number, idWin: number, iterator: number) {
    this.navCtrl.push(SurveyWinConsoPage, {idSurvey: [idTable.toString() + idWin.toString() + iterator.toString()]});
  }

  // onFormExist() {
  //   if (this.winsService.winFormList['bottleCap']){
  //     return this.formExist = true;
  //   }
  // }

  onSaveList() {
    if (this.winsService.winFormList.length < 6)
    {
      alert('Veuillez renseigner tous les formulaires');
    } else {
      let loader = this.loadingCtrl.create({
        content: 'Sauvegarde en cours…'
      });
      loader.present();
      this.winsService.saveData().then(
        () => {
          loader.dismiss();
          this.toastCtrl.create({
            message: 'Données sauvegardées !',
            duration: 3000,
            position: 'bottom'
          }).present();
        },
        (error) => {
          loader.dismiss();
          this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'bottom'
          }).present();
        }
      );
    }
  }

}
