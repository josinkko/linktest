import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LinkTest';

  constructor(private router: Router) {}
  openApp() {
    // this.router.navigate([`/applink`])
    console.log('HEJHEJHEJfdfsdfs');
    // window.location.href = "https://link-test-ntm.herokuapp.com/applink"
    window.location.href = "https://link-test-ntm.herokuapp.com/artikel/https://folkbladet.se/debatt/artikel/kd-aldre-ska-ha-rad-att-ga-till-tandlakaren/jo0wv5yj"
    
  }
}
