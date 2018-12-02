import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { WinsSer}

@Component({
  selector: 'page-single-table-pro',
  templateUrl: 'single-table-pro.html',
})
export class SingleTableProPage implements OnInit {

  table: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.table = this.navParams.get('numberTable');
  }

}
