import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sanitizer: DomSanitizer, private iconRegistry: MatIconRegistry) {
    iconRegistry.addSvgIcon(
        'forward',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icon/arrow_forward_ios-24px.svg'));
  }

}
