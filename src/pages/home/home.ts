import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleTableConsoPage } from '../single-table-conso/single-table-conso';
import { SingleTableProPage } from '../single-table-pro/single-table-pro';
import { DataBasePage } from '../data-base/data-base';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  onGoToConsoTable(table: number) {
    this.navCtrl.push(SingleTableConsoPage, {numberTable: table});
  }

  onGoToProTable(table: number) {
    this.navCtrl.push(SingleTableProPage, {numberTable: table});
  }

  onGoToAdmin(){
    this.navCtrl.push(DataBasePage);
  }
}
