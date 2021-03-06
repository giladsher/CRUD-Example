import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel, Event, NavigationStart, NavigationError, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crude';
  // Here we added an interceptor to router event for the loading bar that is running by default as Observable
  constructor(private loadingBar: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event) : void {
    if(event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if(event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if(event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if(event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }

}
