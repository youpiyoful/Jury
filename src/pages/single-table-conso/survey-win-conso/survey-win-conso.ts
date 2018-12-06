import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WinsService } from '../../../services/wins.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
    // console.log(this.idWin);
    this.iteratorWin =+ this.navParams.get('idSurvey').toString().slice(6) + 1;
    this.idForm =+ this.navParams.get('idSurvey');
    this.initForm();
  }

  initForm() {
    this.surveyWinConso = this.formBuilder.group({
      idForm: new FormControl(this.idForm, Validators.compose([Validators.required, Validators.minLength(1)])),
      idTable: new FormControl(this.idTable, Validators.compose([Validators.required, Validators.minLength(1)])),
      idWin: new FormControl(this.idWin, Validators.compose([Validators.required, Validators.minLength(1)])),
      iteratorWin: new FormControl(this.iteratorWin, Validators.compose([Validators.required, Validators.minLength(1)])),
      blindTest: new FormControl(5, Validators.compose([Validators.required, Validators.minLength(1)])),
      winAndBottleTest: new FormControl(5, Validators.compose([Validators.required, Validators.minLength(1)])),
      bottleShape: new FormControl(Validators.compose([Validators.required, Validators.minLength(1)])),
      bottleColor: new FormControl(Validators.compose([Validators.required, Validators.minLength(1)])),
      bottleCap: new FormControl(Validators.compose([Validators.required, Validators.minLength(1)])),
      labelColor: new FormControl(Validators.compose([Validators.required, Validators.minLength(1)])),
      labelShape: new FormControl(Validators.compose([Validators.required, Validators.minLength(1)])),
      labelMessage: new FormControl(Validators.compose([Validators.required, Validators.minLength(1)])),
      // isValidated: new FormControl(Validators.compose([Validators.required, Validators.minLength(1)]))
    });
  }

  onSubmitForm() {
    // console.log(this.surveyWinConso.value['isValidated']);
    if ((this.surveyWinConso.value['bottleShape'] != "") &&
        (this.surveyWinConso.value['bottleColor'] != "") &&
        (this.surveyWinConso.value['bottleCap'] != "") &&
        (this.surveyWinConso.value['labelColor'] != "") &&
        (this.surveyWinConso.value['labelShape'] != "") &&
        (this.surveyWinConso.value['labelMessage'] != "")){
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
        this.surveyWinConso.get('labelMessage').value,
        // this.surveyWinConso.get('isValidated').value
      );
      this.winsService.addWinForm(newWinForm);
      console.log(this.winsService.winFormList);
      this.navCtrl.pop();
    } else {
      alert('veuillez remplire tous les champs du formulaire');
    }
  }
}
