import { WinForm } from '../models/WinForm';
// import { SingleTableConsoPage } from '../pages/single-table-conso/single-table-conso';

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


export class WinsService {
  winFormList: WinForm[] = []; //surveyList think for name of array
  winsFromTable: Array<string>;
  dataFromTable: Array<string>;

  searchData(file, data, search, result) {
    for (let i = 0; i < file.length; i++ ) {
      if (file[i][data] === search) {
        result =  file[i];
      }
    }
    if (!result) {
      alert("cette table n'existe pas");
    } else {
      return result;
    }
  }

  retrieveData(table) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('TableConso').once('value').then(
        (data: DataSnapshot) => {
          // console.log(this.searchData(data.val(), 'id_degust_conso', this.table, this.dataFromTable));
          this.dataFromTable = this.searchData(data.val(), 'id_degust_conso', table, this.dataFromTable);
          this.winsFromTable = Object.values(this.dataFromTable).slice(1);
          // this.idW = Object.values(this.dataFromTable).slice(0, 1);
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}
