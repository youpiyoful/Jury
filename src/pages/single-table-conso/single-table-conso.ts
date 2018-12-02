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
  winFromTable: Array<string>;
  // allData: Array<string>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ngOnInit() {
    this.table = +this.navParams.get('numberTable'); // i use + for converting my numberTable string in a number variable
  }

  // emitWins() {
  //   this.winFromTable.next(this.)
  // }
  // winFromTable()

  map(file, data, search, result) {
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
          // let temp = data.val();
          // this.allData = data.val();
          // let idConso = this.allData[0]['id_degust_conso'];
          // console.log(typeof idConso);
          // console.log(typeof this.table);
          // console.log(this.allData[0]['id_degust_conso']);
          // console.log(this.table);
          // if (this.allData[0]['id_degust_conso'] === this.table) {
          //   console.log(this.allData);
          // } else {
          //   console.log('coucou');
          // }
          console.log(this.map(data.val(), 'id_degust_conso', this.table, this.winFromTable));// remplacer 0 par le numéro de la table donné par l'utilisateur
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
