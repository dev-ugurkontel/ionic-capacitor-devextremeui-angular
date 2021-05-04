import { Component } from '@angular/core';
import { DateboxService } from '../services/datebox/datebox.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  now: Date = new Date();
  firstWorkDay2017: Date = new Date(2017, 0, 3);
  min: Date = new Date(1900, 0, 1);
  dateClear = new Date(2015, 11, 1, 6);
  disabledDates: Date[];

  constructor(
    dateboxService: DateboxService
  ) {
      this.disabledDates = dateboxService.getFederalHolidays();
  }

}
