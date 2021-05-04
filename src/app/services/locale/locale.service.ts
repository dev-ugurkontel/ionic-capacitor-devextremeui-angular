import { Injectable } from '@angular/core';

export class Locale {
  name: string;
  value: string;
}

const locales: Locale[] = [{
  name: 'Türkçe',
  value: 'tr'
}, {
  name: 'English',
  value: 'en'
}];

export class PaymentView {
  contact: string;
}

export class Dictionary {
    [key: string]: PaymentView;
}

const dictionary: Dictionary = {
  tr: {
    contact: 'İletişim'
  },
  en: {
    contact: 'Contact'
  }
};

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  getLocales() {
    return locales;
  }
  getDictionary() {
    return dictionary;
  }
}
