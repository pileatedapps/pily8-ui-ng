import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthButtonComponent } from './auth/components/auth-button.component';

@Component({
  imports: [RouterModule, AuthButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'pily8-ui-ng';
}
