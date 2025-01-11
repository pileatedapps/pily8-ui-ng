import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AuthService, User } from '@auth0/auth0-angular';
import { UserMetaDataService } from '../services/user-meta-data.service';
import { tap } from 'rxjs';
import { meta } from '@eslint/js';

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
  private readonly userMetaDataService: UserMetaDataService = inject(UserMetaDataService);
  userDetails!: User;

  ngOnInit(): void {
    this.userMetaDataService.getUser().pipe(
    ).subscribe((user: User) => {
      this.userDetails = user;
    })
  }
}
