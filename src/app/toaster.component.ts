import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

import { ToasterPayload } from './app.interface';

@Component({
  selector: 'app-number',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit, OnDestroy {
  displayOrNot: string = "notShow";
	count: number = 0;
  public showloader: boolean = false;      
  private subscription: Subscription;
  private timer: Observable<any>;
  payload: ToasterPayload;

  public ngOnInit() {
    this.payload = {toasterType: "", toasterTitle: "", toasterText: ""};
  }
  
  public ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }

  public setTimer(payload: ToasterPayload) {
    this.payload = payload;
    this.displayOrNot = "notHide";
    this.timer = Observable.timer(5000);
    this.subscription = this.timer.subscribe(() => {
      this.displayOrNot = "notShow";
    });
  }
} 