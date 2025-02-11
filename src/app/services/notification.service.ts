import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: string[];

  constructor() {
    this.notifications = [
      'You Have Unread Messages',
      'People Reacting To Your Post',
      'Amr Sent You A Friend Request',
      '',
      'Post Shared Successfully',
    ];
  }

  getNotifications(): Observable<string> {
    // return from(this.notifications);
    return new Observable<string>((observer) => {
      // observer.next()
      // observer.error()
      // observer.complete()
      let counter: number = 0;
      let notificationInterval = setInterval(() => {
        if (counter == this.notifications.length) {
          observer.complete();
        }

        if (this.notifications[counter] == '') {
          observer.error("This Notification Is Empty");
        }
        observer.next(this.notifications[counter]);
        counter++;
      }, 2000);

      return{
        unsubscribe:()=>{
          clearInterval(notificationInterval);
        }
      }
    });
  }
}
