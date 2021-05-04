import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { DxFileManagerModule, DxPopupModule } from 'devextreme-angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,

    DxFileManagerModule,
    DxPopupModule
  ],
  declarations: [Tab3Page],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Tab3PageModule {}
