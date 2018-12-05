import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WinsService } from '../../../services/wins.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WinForm } from '../../../models/WinForm';


@Component({
  selector: 'page-survey-win-conso',
  templateUrl: 'survey-win-conso.html',
})
export class SurveyWinConsoPage implements OnInit {

  idForm: number; // it s a mix between idTable and idWin for an unic id for survey
  idWin: number;
  idTable: number;
  iteratorWin: number;
  surveyWinConso: FormGroup;
  blindTest: number = 5;
  winAndBottleTest: number = 5;
  // bottleShape: string;
  // bottleColor: string;
  // bottleCap: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public winsService: WinsService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.idTable =+ this.navParams.get('idSurvey').toString().slice(0,3); // i use toString for explode the array and select what i want
    this.idWin =+ this.navParams.get('idSurvey').toString().slice(3,6); // slice for select what i want in the new array
    console.log(this.idWin);
    this.iteratorWin =+ this.navParams.get('idSurvey').toString().slice(6) + 1;
    this.idForm =+ this.navParams.get('idSurvey');
    this.initForm();
  }

  initForm() {
    this.surveyWinConso = this.formBuilder.group({
      idForm: [this.idForm, Validators.required],
      idTable: [this.idTable, Validators.required],
      idWin: [this.idWin, Validators.required],
      iteratorWin: [this.iteratorWin, Validators.required],
      blindTest: [5, Validators.required],
      winAndBottleTest: [5, Validators.required],
      bottleShape: ['', Validators.required],
      bottleColor: ['', Validators.required],
      bottleCap: ['', Validators.required],
      labelColor: ['', Validators.required],
      labelShape: ['', Validators.required],
      labelMessage: ['', Validators.required]
    });
  }

  onSubmitForm() {
    // this.surveyWinConso['bottleShape'] = this.bottleShape;
    // this.surveyWinConso['bottleColor'] = this.bottleColor;
    // this.surveyWinConso['bottleCap'] = this.bottleCap;
    let newWinForm = new WinForm(
      this.surveyWinConso.get('idForm').value,
      this.surveyWinConso.get('idTable').value,
      this.surveyWinConso.get('idWin').value,
      this.surveyWinConso.get('iteratorWin').value,
      this.surveyWinConso.get('blindTest').value,
      this.surveyWinConso.get('winAndBottleTest').value,
      this.surveyWinConso.get('bottleShape').value,
      this.surveyWinConso.get('bottleColor').value,
      this.surveyWinConso.get('bottleCap').value,
      this.surveyWinConso.get('labelColor').value,
      this.surveyWinConso.get('labelShape').value,
      this.surveyWinConso.get('labelMessage').value
    );
    if (WinForm) {
      this.winsService.addWinForm(newWinForm);
      console.log(this.winsService.winFormList);
      this.navCtrl.pop();
    } else {
      alert("vous n'avez pas tous validé");
    }
  }
}
