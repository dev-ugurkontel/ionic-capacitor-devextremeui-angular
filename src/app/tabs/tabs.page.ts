import { Component } from '@angular/core';

import { Locale, LocaleService } from '../services/locale/locale.service';

import { locale, loadMessages, formatMessage } from 'devextreme/localization';

import trMessages from 'devextreme/localization/messages/tr.json';
import enMessages from 'devextreme/localization/messages/en.json';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  locale: string;
  locales: Locale[];
  formatMessage = formatMessage;

  constructor(
    private localeService: LocaleService
  ) {
    this.locale = this.getLocale();
    this.locales = localeService.getLocales();

    this.initMessages();
    locale(this.locale);
  }

  initMessages() {
    loadMessages(trMessages);
    loadMessages(enMessages);
    loadMessages(this.localeService.getDictionary());
  }

  changeLocale(data) {
    this.setLocale(data.value);
    parent.document.location.reload();
  }

  getLocale() {
    const locale2 = sessionStorage.getItem('locale');
    return locale2 != null ? locale2 : 'en';
  }

  setLocale(locale3: string) {
    sessionStorage.setItem('locale', locale3);
  }

}
