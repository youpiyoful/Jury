import { WinForm } from '../models/WinForm';
// import { SingleTableConsoPage } from '../pages/single-table-conso/single-table-conso';

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


export class WinsService {
  winFormList: WinForm[] = []; //surveyList think for name of array
  winsFromTable: Array<string>;
  dataFromTable: Array<string>;
  tableNumber: number;

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

  addWinForm(winForm: WinForm) {
    this.winFormList.push(winForm);
  }

  retrieveData(table) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('TableConso').once('value').then(
        (data: DataSnapshot) => {
          this.dataFromTable = this.searchData(data.val(), 'id_degust_conso', table, this.dataFromTable);
          this.winsFromTable = Object.values(this.dataFromTable).slice(1);
          this.tableNumber =+ Object.values(this.dataFromTable).slice(0, 1);
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('surveyListConso/'+this.tableNumber).set(this.winFormList).then(
        (data: DataSnapshot) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


}
