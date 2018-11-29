import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Component({
  selector: 'page-single-table-conso',
  templateUrl: 'single-table-conso.html',
})
export class SingleTableConsoPage implements OnInit {

  table: string;
  winFromTable: Array<string>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ngOnInit() {
    this.table = this.navParams.get('numberTable');
  }

  // emitWins() {
  //   this.winFromTable.next(this.)
  // }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('TableConso').once('value').then(
        (data: DataSnapshot) => {
          this.winFromTable = data.val();
          console.log(this.winFromTable[0]);// remplacer 0 par le numéro de la table donné par l'utilisateur
          // this.emitAppareils();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
  // firebase.database().ref().on('value', (snapshot) => {
  //   let result = snapshot.value();
  //   for(let k in result){ //"k" provides key Id of each object
  //    user_data.push({
  //      id : k,
  //      name : result[k].name,
  //      phone : result[k].phone,
  //    });
  //   }
  // });

}
