import { Component } from '@angular/core';

import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  preserveWhitespaces: true
})
export class Tab3Page {

  remoteProvider: RemoteFileSystemProvider;
  imageItemToDisplay: any = {};
  popupVisible = false;

  constructor() {
      this.remoteProvider = new RemoteFileSystemProvider({
          endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images'
      });
  }

  displayImagePopup(e) {
      this.imageItemToDisplay = e.file;
      this.popupVisible = true;
  }

}
