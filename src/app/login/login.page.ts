import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private sanitizer: DomSanitizer, private iconRegistry: MatIconRegistry) {
    iconRegistry.addSvgIcon(
        'forward',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icon/arrow_forward_ios-24px.svg'));
  }

  ngOnInit() {
  }

}
