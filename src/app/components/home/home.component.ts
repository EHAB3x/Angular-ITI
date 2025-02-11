import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription! :Subscription;
  constructor(private _NotificationService: NotificationService) {}


  ngOnInit(): void {
    // this._NotificationService.getNotifications().subscribe((notification)=>{
      //   console.log(notification);
      // })
      this.subscription = this._NotificationService.getNotifications().pipe(
        filter((msg)=> msg.startsWith('Amr'))
      ).subscribe({
        next: (notification) => {
          console.log(notification);
        },
        error:(error)=> {
          console.log(error);
        },
        complete: ()=> {
          console.log("Notification Completed Successfully");
        }
      });
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe()
    }
}
