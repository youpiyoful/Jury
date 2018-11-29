import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleTableConsoPage } from '../single-table-conso/single-table-conso';
import { SingleTableProPage } from '../single-table-pro/single-table-pro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // table: string;

  constructor(public navCtrl: NavController) {

  }

  // listen(table: string) {
  //   console.log(table);
  // }

  onGoToConsoTable(table: string) {
    this.navCtrl.push(SingleTableConsoPage, {numberTable: table});
  }

  onGoToProTable(table: string) {
    this.navCtrl.push(SingleTableProPage, {numberTable: table});
  }
}
