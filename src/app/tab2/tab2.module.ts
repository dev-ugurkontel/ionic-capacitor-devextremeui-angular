import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,

    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule
  ],
  declarations: [Tab2Page],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Tab2PageModule {}
