import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsoPage } from '../conso/conso';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // table: string;

  constructor(public navCtrl: NavController) {

  }

  onGoToConsoTable(table: string) {
    this.navCtrl.push(ConsoPage, {NumberTable: table});
  }

}
