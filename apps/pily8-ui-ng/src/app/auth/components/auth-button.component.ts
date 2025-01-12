import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AuthService, User } from '@auth0/auth0-angular';
import { UserService } from '../services/user-service';
import { Pily8UserModel } from '../Pily8User.model';

@Component({
  selector: 'app-auth-button',
  imports: [CommonModule],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss',
  standalone: true
})
export class AuthButtonComponent implements OnInit {
  public readonly auth: AuthService = inject(AuthService);
  public readonly document: Document = inject(DOCUMENT);
  private readonly userMetaDataService: UserService = inject(UserService);
  userDetails!: User;

  ngOnInit(): void {
    this.userMetaDataService.getUser().pipe(
    ).subscribe((user: Pily8UserModel) => {
      this.userDetails = user;
    })
  }
}
