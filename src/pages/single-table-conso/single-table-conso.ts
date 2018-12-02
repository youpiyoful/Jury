import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Component({
  selector: 'page-single-table-conso',
  templateUrl: 'single-table-conso.html',
})
export class SingleTableConsoPage implements OnInit {

  table: number;
  winsFromTable: Array<string>;
  dataFromTable: Array<string>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ngOnInit() {
    this.table = +this.navParams.get('numberTable'); // i use + for converting my numberTable string in a number variable
    this.retrieveData();
  }

  searchData(file, data, search, result) {
    for (let i = 0; i < file.length; i++ ) {
      if (file[i][data] === search) {
        result =  file[i];
      }
    }
    if (!result) {
      console.log("cette table n'existe pas");
    } else {
      return result;
    }
  }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('TableConso').once('value').then(
        (data: DataSnapshot) => {
          // console.log(this.searchData(data.val(), 'id_degust_conso', this.table, this.dataFromTable));
          this.dataFromTable = this.searchData(data.val(), 'id_degust_conso', this.table, this.dataFromTable);
          this.winsFromTable = Object.values(this.dataFromTable).slice(1);
          this.table = Object.values(this.dataFromTable).slice(0, 1);
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}
