import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  type = 'password';
  darkMode = false;
  mode = 'Light';
  eye = 'eye';

  constructor(private sanitizer: DomSanitizer, private iconRegistry: MatIconRegistry) {
    iconRegistry.addSvgIcon(
        'forward',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icon/arrow_forward_ios-24px.svg'));
    iconRegistry.addSvgIcon(
        'eye',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icon/visibility-24px.svg'));
    iconRegistry.addSvgIcon(
        'clear',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icon/clear_all-24px.svg'));
    iconRegistry.addSvgIcon(
        'eye-close',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icon/visibility_off-24px.svg'));
  }

  ngOnInit() {
  }

  viewPassword() {
    if (this.type === 'password') {
      this.type = 'input';
      this.eye = 'eye-close';
    } else {
      this.type = 'password';
      this.eye = 'eye';
    }
  }

  changeTheme() {
    this.darkMode = !this.darkMode;
    if (this.mode === 'Light') {
      this.mode = 'Dark';
    } else {
      this.mode = 'Light';
    }
  }
}
