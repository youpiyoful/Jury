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
  // idWin: Array<number>;
  // allData: Array<string>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ngOnInit() {
    this.table = +this.navParams.get('numberTable'); // i use + for converting my numberTable string in a number variable
    this.retrieveData();
  }

  // emitWins() {
  //   this.winsFromTable.next(this.)
  // }
  // winsFromTable()

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

  convertObjectToArray(elt, object, elts) {
    for (let i = 0; i < Object.keys(object).length; i++) {
      if (Object.keys(object) === object['elt' + i]){
        elts.push(object['elt'+ i]);
      }
    }
    console.log(elts);
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
          console.log(this.searchData(data.val(), 'id_degust_conso', this.table, this.dataFromTable));// remplacer 0 par le numéro de la table donné par l'utilisateur
          this.dataFromTable = this.searchData(data.val(), 'id_degust_conso', this.table, this.dataFromTable);
          // console.log(this.convertObjectToArray('vin_', this.winsFromTable, this.idWin));

          this.winsFromTable = Object.values(this.dataFromTable.slice(1));
          this.table = Object.values(this.dataFromTable).slice(0, 1);
          // console.log(Object.keys(this.winsFromTable).values());
          // console.log(this.winsFromTable['vin_1']);
          // this.winsFromTable.slice(1, 6);
          // this.emitAppareils();
          // let result = this.winsFromTable.filter(winsFromTable => winsFromTable.length > 6);
          // console.log(result);

          // ---------------------------------------------------------------------------------------------------//
          // -------------------------- regarder du côté de emitBooks et .next ---------------------------------//
          // ---------------------------------------------------------------------------------------------------//

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
