import { Component, ViewChild } from '@angular/core';

import { ToasterComponent } from './toaster.component';
import { ToasterPayload } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./toaster.component.css']
})
export class AppComponent {
  @ViewChild(ToasterComponent)
  private toastrComponent: ToasterComponent;
  title: string = "Simple toaster";
  
  displayToaster(toastercatType: string) {
    let payload: ToasterPayload;
    switch (toastercatType) {
      case 'error': {
        payload = {toasterType: toastercatType, toasterTitle: "Error", toasterText: "This is an error!"};
        this.showToastr(payload);
        break;
      }
      case 'success': {
        payload = {toasterType: toastercatType, toasterTitle: "Success", toasterText: "This was successfully completed!"}
        this.showToastr(payload);
        break;
      }
      case 'info': {
        payload = {toasterType: toastercatType, toasterTitle: "Info", toasterText: "Some info here!"};
        this.showToastr(payload);
        break;
      }
      case 'warning': {
        payload = {toasterType: toastercatType, toasterTitle: "Warning", toasterText: "Pay attentions here!"};
        this.showToastr(payload);
        break;
      }
      default: {
        payload = {toasterType: toastercatType, toasterTitle: "Neutral", toasterText: "This is a neutral toaster!"};
        this.showToastr(payload);
        break;
      }
    }
  }
  showToastr(payload) {
    this.toastrComponent.setTimer(payload);
  }
}