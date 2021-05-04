import { Component } from '@angular/core';

import trMessages from 'devextreme/localization/messages/tr.json';
import enMessages from 'devextreme/localization/messages/en.json';

import { locale, loadMessages } from 'devextreme/localization';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    loadMessages(trMessages);
    loadMessages(enMessages);

    loadMessages({
      tr: {
          greetingMessage: 'Günaydın'
      },
      en: {
          greetingMessage: 'Good morning'
      }
    });

    // set manuel locale
    //locale('tr');

    // set auto detected locale
    locale(navigator.language);

    //console.log(formatMessage('greetingMessage', 'test'));
  }

}
