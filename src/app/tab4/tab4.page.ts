import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Network, Toast } from '@capacitor/core';
import { DxFormComponent } from 'devextreme-angular';

import notify from 'devextreme/ui/notify';

import { Customer, FormValidationService } from '../services/form-validation/form-validation.service';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
const sendRequest = function(value) {
  const validEmail = 'test@dx-email.com';
  return new Promise((resolve) => {
      // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
      setTimeout(function() {
          resolve(value !== validEmail);
      }, 1000);
  });
};

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;
  password = '';
  passwordOptions: any = {
    mode: 'password',
    value: this.password
  };
  customer: Customer;
  countries: string[];
  cities: string[];
  maxDate: Date = new Date();
  cityPattern = '^[^0-9]+$';
  namePattern: any = /^[^0-9]+$/;
  // eslint-disable-next-line max-len
  phonePattern: any = /^[+]*[0-9]*[ ]{0,1}[(]{0,1}[ ]{0,1}[0-9]{1,3}[ ]{0,1}[)]{0,1}[ ]{0,1}[0-9]{1,3}[ ]{0,1}[0-9]{2}[ ]{0,1}[0-9]{2}[ ]{0,1}[-\.\/]{0,1}[ ]{0,1}[0-9]{1,5}$/g;
  phoneRules: any = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    X: /[02-9]/
  };
  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true
  };

  passwordComparison = () => this.form.instance.option('formData').password;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  networkStatus: string;
  checkComparison() {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    private formValidationService: FormValidationService,
    private ngZone: NgZone
  ) {
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 0));
    this.countries = this.formValidationService.getCountries();
    this.cities = this.formValidationService.getCities();
    this.customer = this.formValidationService.getCustomer();
  }

  async ngOnInit() {
    Network.addListener('networkStatusChange', (status) => {
      this.ngZone.run(() => {
        // This code will run in Angular's execution context
        this.networkStatus = status.connected ? 'Online' : 'Offline';
      });
    });
  }

  async show() {
    await Toast.show({
      text: 'Hello!'
    });
  }

  asyncValidation(params) {
    return sendRequest(params.value);
  }

  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
  onFormSubmit = (e) => {
    // test toast açtır
    this.show();
    this.formValidationService.addCustomer(this.customer)
      .subscribe((res: any) => {
        this.getSuccess('Kartvizit başarıyla eklendi.');
      }, (err: any) => {
        this.getError('Eklenme işlemi sırasında bir hata oluştu.');
      });

    e.preventDefault();
  };

  getSuccess(message: string): void {
    notify(message, 'success');
  }

  getError(message: string): void {
    notify(message, 'error');
  }

  getNofity(messages: string, type: string): void {
    notify({
      message: messages,
      // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
      width: '80%',
      position: {
          my: 'center top',
          at: 'center top',
          offset: '0 20'
      }
    }, type, 3000);
  }

}
