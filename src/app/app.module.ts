import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SingleTableProPage } from '../pages/single-table-pro/single-table-pro';
import { SingleTableConsoPage } from '../pages/single-table-conso/single-table-conso';
import { WinsService } from '../services/wins.service';
import { SurveyWinConsoPage } from '../pages/single-table-conso/survey-win-conso/survey-win-conso';
import { Environment } from '../environment/environment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SingleTableProPage,
    SingleTableConsoPage,
    SurveyWinConsoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SingleTableProPage,
    SingleTableConsoPage,
    SurveyWinConsoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WinsService,
    Environment,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
