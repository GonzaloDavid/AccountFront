import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';

export function getSettings(configService: ConfigService) {
  return () => configService.configApiBaseUrl();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


}
